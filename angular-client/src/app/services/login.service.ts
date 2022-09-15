import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login() {
    window.sessionStorage.setItem('loggedIn', 'true');
  }

  loggedIn(): boolean {
    return window.sessionStorage.getItem('loggedIn') == 'true' ? true : false;
  }
}
