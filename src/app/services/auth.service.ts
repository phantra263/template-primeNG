import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;
  constructor(private http: HttpClient, private router: Router) { }

  loggedIn() {
    const user = localStorage.getItem('user');

    try {
      this.currentUser = JSON.parse(user!);
      return user ? true : false;
    }
    catch (error) {
      return false;
    }

  }

  getJwtToken() {
    return localStorage.getItem('user');
  }

  isLogged() {
    const token = localStorage.getItem('user');
    return token ? true : false;
  }

  login(model: any) {

  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('user');
  }

}