import {Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy} from "@angular/core";
import {EventItemComponent} from "./event-item.component";
import {Event} from "../../shared/event/event";

const EVENTS: Event[] = [
    { 
      id: 1,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 2,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 3,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 4,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 5,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 6,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 7,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 8,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 9,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    },
    { 
      id: 10,
      name: "Happy New Year !!",
      picture: "http://placehold.it/50x50",
      drink: true,
      food: false,
      money: 12,
      start: "2016-12-31",
      starth: "21:00",
      end: "2017-01-01",
      endh: "12:00",
      invite: 12,
      description: "New year party at home !;)",
    }
  ];

@Component({
  selector: "event-list",
  directives: [EventItemComponent],
  templateUrl: "pages/event/event-list.html",
  styleUrls: ["pages/event/event-list.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit{

  txt: string = "Events";
  isToggle: number = 0;

  public events: Array<Event>;
  private counter: number;

  constructor() {
      this.events = EVENTS;
  }

  ngOnInit() {
    console.log("init");
    this.loadAllEvents();
  }

// todo
  onAddEvent(){
    console.log("add");
  }
// todo
  onFilterEvent(){
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