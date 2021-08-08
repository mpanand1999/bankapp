import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accnum = "please enter account name"
  acno = ""
  pswd = ""
  user: any = {
    1000: { acno: 1000, uname: "anand", password: "userone", balance: "3000" },
    1001: { acno: 1001, uname: "aiswarya", password: "usertwo", balance: "2000" },
    1002: { acno: 1002, uname: "poulose", password: "userthree", balance: "4000" },
    1003: { acno: 1003, uname: "pouly", password: "userfour", balance: "2500" }
  }

  constructor() { }

  ngOnInit(): void {
  }
  accchange(event: any) {
    // console.log(event.target.value);
    this.acno = event.target.value

  }
  pswdchange(event: any) {
    this.pswd = event.target.value
  }
  login() {
    var acno = this.acno;
    var pswd = this.pswd;
    let accDeatails = this.user;
    if (acno in accDeatails) {
      if (pswd == accDeatails[acno]["password"]) {
        alert("login succesfull")
      }
      else {
        alert("worng password")
      }
    }
    else{
      alert("invalid user name")
    }
  }
}
