import {Component,Input} from "@angular/core";
import {Event} from "../../shared/event/event";

@Component({
    selector: 'item-component',
    templateUrl: "pages/event/event-item.html",
    styleUrls: ["pages/event/event-item.css"],
})
export class EventItemComponent {
    @Input() event: Event;
    constructor() {}
}