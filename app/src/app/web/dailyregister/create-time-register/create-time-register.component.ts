import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../auth/services/user.service";
import {Router} from "@angular/router";
import {AdminService} from "../../../auth/services/admin.service";
import {User} from "../../../auth/models/user";
import {Project} from "../../project/project";
import {Employee} from "../../employee/employee";
import {Register} from "ts-node";
import {Timeregister} from "../timeregister";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-create-time-register',
  templateUrl: './create-time-register.component.html',
  styleUrls: ['./create-time-register.component.css']
})
export class CreateTimeRegisterComponent implements OnInit {

  currentUser: User;
  projectsList:Project[];
  employeesList: Employee[] = [];
  tmpProject: Project;
  indexTeam: number;
  timeRegister: Timeregister[] = [];
  observableTimeRegister: Observable<Timeregister[]>;
  timeRegisterTmp: Timeregister = new Timeregister();
  employeeListSize: number;
  newProject: Project;
  newEmployee: Employee;
  showTableBool: boolean = false;
  dateString: string;

  constructor(private userService: UserService, private router: Router, private adminService: AdminService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getProjectByUserId(this.currentUser.id)
      .subscribe(data => {console.log(data);
      this.projectsList =data;}, error => console.log(error));
  }

  createRegister() {

    console.log(this.tmpProject = this.projectsList[0]);
    this.indexTeam = this.tmpProject.team.id;

    this.userService.getEmployeesByTeamId(this.indexTeam)
      .subscribe(data => {
        console.log(data);
        this.employeesList =data;
        this.employeeListSize = this.employeesList.length;


        for (let i = 0; i < this.employeeListSize ; i++) {
          this.newProject= new Project();
          this.newProject.projectName =  this.projectsList[0].projectName;
          this.newProject.team = this.projectsList[0].team;
          this.newProject.user = this.projectsList[0].user;
          this.timeRegisterTmp = new Timeregister();
          this.timeRegisterTmp.project = this.newProject;
          this.dateString = new Date().toDateString();
          this.timeRegisterTmp.date = this.dateString;

          this.newEmployee = new Employee();
          this.newEmployee.firstName = this.employeesList[i].firstName;
          this.newEmployee.lastName = this.employeesList[i].lastName;
          this.newEmployee.team = this.employeesList[i].team;
          this.timeRegisterTmp.employee = this.newEmployee;

          this.timeRegisterTmp.workTime = 8;
          this.timeRegisterTmp.absence = " - ";
          this.timeRegister.push(this.timeRegisterTmp)
        }

        // this.observableTimeRegister = this.convert(this.timeRegister);
        }, error => console.log(error));


  }

  save() {
    for(let i = 0; i < 1; i++) {
      this.userService.createRegisters(this.timeRegister[i])
        .subscribe(data => console.log(data), error => console.log(error));
    }
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['projects']);
  }
  // convert<T>(array: Array<T>): Observable<Array<T>> {
  //   return of(array);
  // }

}
