"use strict";
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var status_bar_util_1 = require("./utils/status-bar-util");
status_bar_util_1.setStatusBarColors();
application_1.nativeScriptBootstrap(app_component_1.AppComponent, null, { startPageActionBarHidden: false });
//# sourceMappingURL=main.js.map