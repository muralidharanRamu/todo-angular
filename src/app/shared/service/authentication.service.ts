import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mockedUser = new User("muralidharanramu99@gmail.com", "123");
  isAuthenticated: boolean = false;

  constructor() { }

  authenticate(user: User): boolean {
    if (this.checkCredentials(user)) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }

  checkCredentials(user: User): boolean {
    if (this.checkEmail(user.getEmail()) && this.checkPassword(user.getPassword())) {
      return true;
    } else {
      return false;
    }
  }

  checkEmail(email: string): boolean {
    if (this.mockedUser.getEmail() === email) {
      return true;
    } else {
      return false;
    }
  }

  checkPassword(password: string): boolean {
    if (this.mockedUser.getPassword() === password) {
      return true;
    } else {
      return false;
    }
  }
}
