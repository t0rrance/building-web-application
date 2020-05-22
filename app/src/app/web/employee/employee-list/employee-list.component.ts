import {Observable} from "rxjs";
import {Employee} from "../employee";
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {AdminService} from "../../../auth/services/admin.service";
import {User} from "../../../auth/models/user";
import {Role} from "../../../auth/models/role";
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
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
    this.employees = this.userService.getEmployeesList();
      console.log(this.employees);
  }

  deleteEmployee(id: number) {
    this.adminService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    // this.reloadData(); ??? bo nie ma update instant
  }

  employeeUpdate(id: number) {
    this.router.navigate(["admin/employees/update",id]);
  }
  employeeDetails(id: number){
    this.router.navigate(["admin/employees/details",id]);
  }

}
