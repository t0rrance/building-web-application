import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Team} from "../../team/team";
import {AdminService} from "../../../auth/services/admin.service";
import {UserService} from "../../../auth/services/user.service";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  teamsList: Observable<Team[]>;
  submitted = false;

  constructor(private adminService: AdminService, private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getAllTeams();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.adminService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.team = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  getAllTeams() {
        this.teamsList = this.userService.getTeamsList();
        console.log(this.teamsList);
        // this.selectedTeamId = this.teamsList[0];
  }


  gotoList() {
    this.router.navigate(['employees']);
  }
}
