import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import {AdminService} from "../../../auth/services/admin.service";
import {UserService} from "../../../auth/services/user.service";
import {Observable} from "rxjs";
import {Team} from "../../team/team";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  teamsList: Observable<Team[]>;

  constructor(private route: ActivatedRoute,private router: Router,
              private adminService: AdminService, private userService: UserService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.getAllTeams();
    this.id = this.route.snapshot.params['id'];
    this.userService.getEmployeesById(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.adminService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
     this.employee = new Employee();
     this.gotoList();
  }

  getAllTeams() {
    this.teamsList = this.userService.getTeamsList();
    console.log(this.teamsList);
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
