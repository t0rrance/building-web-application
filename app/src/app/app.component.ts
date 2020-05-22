import { Component } from '@angular/core';
import {User} from "./auth/models/user";
import {UserService} from "./auth/services/user.service";
import {Router} from "@angular/router";
import {Role} from "./auth/models/role";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-user-management';
  currentUser: User;

  constructor(private userService: UserService, private router: Router){
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }

  logOut(){
    this.userService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    })
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

  get isLogged() {
    return this.currentUser;
  }

}
