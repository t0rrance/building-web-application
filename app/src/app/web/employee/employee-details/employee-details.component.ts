import {Employee} from '../employee';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
  private userService: UserService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.userService.getEmployeesById(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}
