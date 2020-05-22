import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Team} from "../team";
import {User} from "../../../auth/models/user";
import {UserService} from "../../../auth/services/user.service";
import {Router} from "@angular/router";
import {AdminService} from "../../../auth/services/admin.service";
import {Role} from "../../../auth/models/role";


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Observable<Team[]>;
  currentUser: User;

  constructor(private userService: UserService, private router: Router, private adminService: AdminService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.teams = this.userService.getTeamsList();
  }

  deleteTeam(id: number) {
    this.adminService.deleteTeam(id)
      .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
  }

  teamUpdate(id: number) {
    this.router.navigate(["admin/teams/update", id]);
  }
  teamDetails(id: number) {
    this.router.navigate(["admin/teams/details", id]);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

}
