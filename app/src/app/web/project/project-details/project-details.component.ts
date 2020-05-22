import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../auth/services/user.service";
import {Project} from "../project";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  project: Project;

  constructor(private route: ActivatedRoute,private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.project = new Project();

    this.id = this.route.snapshot.params['id'];

    this.userService.getProjectById(this.id)
      .subscribe(data => {
        console.log(data);
        this.project = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['projects']);
  }

}
