import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../team";
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  id: number;
  team: Team;

  constructor(private route: ActivatedRoute,private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.team = new Team();

    this.id = this.route.snapshot.params['id'];

    this.userService.getTeamById(this.id)
      .subscribe(data => {
        console.log(data);
        this.team = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['teams']);
  }
}
