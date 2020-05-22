import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Register} from "ts-node";
import {User} from "../../../auth/models/user";
import {Timeregister} from "../timeregister";
import {UserService} from "../../../auth/services/user.service";
import {Router} from "@angular/router";
import {AdminService} from "../../../auth/services/admin.service";
import {Role} from "../../../auth/models/role";

@Component({
  selector: 'app-time-register-list',
  templateUrl: './time-register-list.component.html',
  styleUrls: ['./time-register-list.component.css']
})
export class TimeRegisterListComponent implements OnInit {

  registers: Observable<Timeregister[]>;
  currentUser: User;

  constructor(private userService: UserService, private router: Router, private adminService: AdminService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.reloadData();
  }

  get isAdmin(){
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

  reloadData() {
    this.registers = this.userService.getRegistersList();
  }

  deleteProject(id: number) {

    this.adminService.deleteRegister(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));

  }

  registerUpdate(id: number) {
    this.router.navigate(["admin/registers/update",id]);
  }

  registerDetails(id: number){
    this.router.navigate(["admin/registers/details",id]);
  }

}
