import {_Date,_Likes,_Location} from "../other/other";
var validator = require("email-validator");

export class User {
  id: number;
  guid: string;
  registered: string;
  isActive: boolean;
  gender: string;
  firstname: string;
  lastname: string;
  relationship_status: string;
  interested_in: string;
  picture: string;
  birthdate: string;
  phone: string;
  job: string;
  email: string;
  password: string;
  about: string;
  interest: Array<string>;
  going: Array<string>;
  passed: Array<string>;
  invited: Array<string>;
  created: Array<string>;
  location: _Location;
  likes: _Likes;
  
  isValidEmail() {
    return validator.validate(this.email);
  }
}