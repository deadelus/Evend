import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router-deprecated";
import {Page} from "ui/page";
import * as ApplicationSettings from "application-settings";

import {Event} from "../../shared/event/event";
import {EventService} from "../../shared/event/event.service";

@Component({
    selector: 'item-add-component',
    providers: [EventService],
    templateUrl: "pages/event/event-item-add.html",
    styleUrls: ["pages/event/event-item-add.css"],
})


export class EventItemAddComponent {
    private location;
    private _eventService;

    private event: Event;
    private eventList: Array<Event>;
    private counter: number = 0;
    // Pour lier les les View a des anims
    // @ViewChild("container") container: ElementRef;
    // @ViewChild("name") name: ElementRef;

    constructor(location : Location, _eventService: EventService) {
        this.location = location;
        this._eventService = _eventService;
        this.eventList = JSON.parse(ApplicationSettings.getString("events", "[]"));
    }

    // todo
    add(){
        this.counter++;
        var ev = new Event(this.counter, '', 'SAMPLE'+this.counter);
        this._eventService.add(ev)
        .subscribe(
            eventOject => {
              this.eventList.unshift(eventOject);
              ApplicationSettings.setString("events", JSON.stringify(this.eventList));
              this.location.back();
            },
            () => {
              alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
              });
            }
          )
    }

    back(){}
    field_prev(){}
    field_next(){}
}
