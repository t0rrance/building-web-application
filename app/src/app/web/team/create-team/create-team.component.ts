import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AdminService} from "../../../auth/services/admin.service";
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  team: Team = new Team();
  submitted = false;
  teams: Observable<Team[]>; // bo nie odświeża strony z listą ekip

  constructor(private adminService: AdminService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  save() {
    this.adminService.createTeam(this.team)
      .subscribe(data => console.log(data), error => console.log(error));
      this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.teams = this.userService.getTeamsList();
    this.router.navigate(['teams']);
  }
}
