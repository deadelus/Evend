import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {EventListComponent} from "./pages/event/event-list.component";
import {EventItemAddComponent} from "./pages/event/event-item-add.component";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, NS_ROUTER_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>",
  styleUrls: ["./app.css", "./platform.css"],
})
@RouteConfig([
  { path: "/Login", component: LoginComponent, name: "Login"},
  { path: "/EventList", component: EventListComponent, name: "EventList", useAsDefault: true},
  { path: "/EventAdd", component: EventItemAddComponent, name: "EventAdd"},
])
export class AppComponent {}
