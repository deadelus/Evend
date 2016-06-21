import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Page} from "ui/page";

@Component({
  selector: "fb-login",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"],
})

export class LoginComponent implements OnInit {

  constructor(private _router: Router, private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    // this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
  }
  
  /*
    TODO
    - Connexion avec FB
    - Creation de token
    - Creation du profil sur Evend.com
    - Si ça fonctionne go > liste des evenements !
  */
  login(){
    this._router.navigate(["EventList"]);
  }
}
