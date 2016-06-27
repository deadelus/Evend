import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Config} from "../config";
import {Event} from "./event";
import {_Date,_Likes,_Location} from "../other/other";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class EventService {
  constructor(private _http: Http) {}

  load() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    return this._http.get(Config.apiUrl + "events", {
      headers: headers
    })
    .map(response => response.json())
    .map(data => {
      let EventList = [];
      data.forEach((event) => {
        EventList.push(event);
      });
      return EventList;
    })
    .catch(this.handleErrors);
  }

  add(EventObject: Event) {
    let headers = new Headers();
    // headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");
    return this._http.post(
      Config.apiUrl + "events",
      JSON.stringify(EventObject),
      { headers: headers }
    )
    .map(res => res.json())
    .map(data => {
      return new Event(
        data.id,
        data.Guid,
        data.Name,
        data.Created,
        data.IsActive,
        data.Picture,
        data.Style,
        data.Food,
        data.Drink,
        data.Ticket,
        data.Ticket_link,
        data.Start,
        data.End,
        data.Location,
        data.Likes,
        data.Description,
        data.Going,
        data.Interested,
        data.Maybe,
        data.Guestlist,
        data.Owner
      );
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
