import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Config} from "../config";
import {Event} from "./event";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class EventService {
  constructor(private _http: Http) {}

  load() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    return this._http.get(Config.apiUrl + "Groceries", {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let EventList = [];
      data.Result.forEach((grocery) => {
        EventList.push(new Event());
      });
      return EventList;
    })
    .catch(this.handleErrors);
  }

  add(name: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");

    return this._http.post(
      Config.apiUrl + "Events",
      JSON.stringify({ Name: name }),
      { headers: headers }
    )
    .map(res => res.json())
    .map(data => {
      // return new Event(data.Result.Id, name);
    })
    .catch(this.handleErrors);
  }

  delete(id: string) {
    var headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");

    return this._http.delete(
      Config.apiUrl + "Event/" + id,
      { headers: headers }
    )
    .map(res => res.json())
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
