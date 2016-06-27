import {Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy} from "@angular/core";
// import {EventItemComponent} from "./event-item.component";
import {EventService} from "../../shared/event/event.service";
import {Event} from "../../shared/event/event";

@Component({
  selector: "event-list",
  // directives: [EventItemComponent],
  providers: [EventService],
  templateUrl: "pages/event/event-list.html",
  styleUrls: ["pages/event/event-list.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit{

  txt: string = "Events";
  isToggle: number = 0;
  counter: number = 0;
  isLoading = false;
  listLoaded = false;

  public eventList: Array<Event> = [];
  // private counter: number;

  constructor(private _eventService: EventService) {}

  ngOnInit() {
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

// todo
  add(){
    var ev = new Event(1, '', 'SAMPLE'+this.counter++);
    this._eventService.add(ev)
    .subscribe(
        eventOject => {
          this.eventList.unshift(eventOject);
          // this.eventList.unshift(ev);
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
        }
      )
  }

// todo
  filter(){
    console.log("filter");
  }
// todo
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
// todo
  loadAllEvents(){
    console.log("all events");
  }
}
