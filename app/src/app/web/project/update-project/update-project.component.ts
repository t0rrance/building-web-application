import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Team} from "../../team/team";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../../auth/services/admin.service";
import {UserService} from "../../../auth/services/user.service";
import {Project} from "../project";
import {User} from "../../../auth/models/user";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  id: number;
  project: Project;
  teamsList: Observable<Team[]>;
  usersList: Observable<User[]>;
  constructor(private route: ActivatedRoute,private router: Router,
              private adminService: AdminService, private userService: UserService) { }

  ngOnInit() {
    this.project = new Project();
    this.getAllTeams();
    this.getAllUsers();
    this.id = this.route.snapshot.params['id'];
    this.userService.getProjectById(this.id)
      .subscribe(data => {
        console.log(data);
        this.project = data;
      }, error => console.log(error));
  }

  updateProject() {
    this.adminService.updateProject(this.id, this.project)
      .subscribe(data => console.log(data), error => console.log(error));
    this.project = new Project();
    this.gotoList();
  }

  getAllTeams() {
    this.teamsList = this.userService.getTeamsList();
    console.log(this.teamsList);
  }

  getAllUsers() {
    this.usersList = this.adminService.findAllUsers();
  }

  onSubmit() {
    this.updateProject();
  }

  gotoList() {
    this.router.navigate(['/projects']);
  }

}
