import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { RegisterUser } from "../models/registerUser";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    
  ) {}
  path = "https://localhost:44361/api/auth/";
  userToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY="token"
  login(user: User) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "login", user, { headers: headers, responseType:"text"} )
      .subscribe(data => {
        this.saveToken(data);
        this.userToken = data;
        this.router.navigateByUrl("customers");
      });
  }

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.http
      .post(this.path + "register", registerUser, { headers: headers, responseType:"text"} )
      .subscribe(data => {});
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  

  loggedIn() {
    const token = localStorage.getItem('token');
    
    return !this.jwtHelper.isTokenExpired(token);
}

  
}
