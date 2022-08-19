import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  public signIn(userData: IUser) {
    localStorage.setItem("ACCESS_TOKEN", "access_token");
  }
  public isLoggedIn() {
    return localStorage.getItem("ACCESS_TOKEN") !== null;
  }
  public logout() {
    localStorage.removeItem("ACCESS_TOKEN");
  }
}
