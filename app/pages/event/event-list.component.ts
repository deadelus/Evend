import {Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";
import * as ApplicationSettings from "application-settings";

import {EventItemComponent} from "./event-item.component";
import {EventService} from "../../shared/event/event.service";
import {Event} from "../../shared/event/event";

@Component({
  selector: "event-list",
  directives: [EventItemComponent],
  providers: [EventService],
  templateUrl: "pages/event/event-list.html",
  styleUrls: ["pages/event/event-list.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit{
  private router;
  private location;
  private _eventService

  private txt: string = "Events";
  private isToggle: number = 0;
  private counter: number = 0;
  private isLoading = false;
  private listLoaded = false;

  public eventList: Array<Event> = [];
  // private counter: number;

  constructor(router: Router, location: Location, _eventService: EventService) {
    this.router = router;
    this.location = location;
    this._eventService = _eventService;

    this.eventList = JSON.parse(ApplicationSettings.getString("events", "[]"));
    location.subscribe((path) => {
      this.eventList = JSON.parse(ApplicationSettings.getString("events", "[]"));
    });
  }

  ngOnInit() {
    ApplicationSettings.clear();
    this.load();
  }

  add(){
    this.router.navigate(["EventAdd"]);
  }

  filter(){
    console.log("filter");
  }

  change(){
    this.isToggle++;

    if(this.isToggle % 3 == 0){
      this.txt="Tous";
    }

    if(this.isToggle % 3 == 1){
      this.txt="Public";
    }

    if(this.isToggle % 3 == 2){
      this.txt="Privé";
    }
  }

  load(){
    this.counter = 0;
    this.isLoading = true;
    this._eventService.load()
      .subscribe(loadedEvents => {
        loadedEvents.forEach((eventObject) => {
          this.eventList.unshift(eventObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }
}
