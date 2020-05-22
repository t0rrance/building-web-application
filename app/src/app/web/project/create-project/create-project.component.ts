import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Team} from "../../team/team";
import {AdminService} from "../../../auth/services/admin.service";
import {UserService} from "../../../auth/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../auth/models/user";
import {Project} from "../project";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  project: Project = new Project();
  teamsList: Observable<Team[]>;
  usersList: Observable<User[]>;
  submitted = false;

  constructor(private adminService: AdminService, private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getAllTeams();
    this.getAllUsers()
  }

  save() {
    this.adminService.createProject(this.project)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  getAllTeams() {
    this.teamsList = this.userService.getTeamsList();
    console.log(this.teamsList);
  }

  getAllUsers() {
    this.usersList = this.adminService.findAllUsers();
  }

  gotoList() {
    this.router.navigate(['projects']);
  }

}
