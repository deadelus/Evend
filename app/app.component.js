"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_deprecated_1 = require("@angular/router-deprecated");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var event_list_component_1 = require("./pages/event/event-list.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, router_1.NS_ROUTER_PROVIDERS],
            template: "<page-router-outlet></page-router-outlet>",
            styleUrls: ["./app.css", "./platform.css"],
        }),
        router_deprecated_1.RouteConfig([
            { path: "/Login", component: login_component_1.LoginComponent, name: "Login" },
            { path: "/EventList", component: event_list_component_1.EventListComponent, name: "EventList", useAsDefault: true },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map