import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  login(requser) {
    console.log(requser);
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    console.log("all users",users);

    let filteredUsers = users.filter(user => {
      return user.email === requser.email && user.password === requser.password;
    });
      // if user exists
    if (filteredUsers.length > 0) {
      localStorage.setItem("currentUser", JSON.stringify(filteredUsers[0]));
      localStorage.setItem('token','mytoken');
      return ({"user":filteredUsers[0], "success": true});
    } else {
      return ({ "message": 'Username or password is incorrect', "success":false });
    }
   }

   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }


}
