import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../../auth/services/admin.service";
import {UserService} from "../../../auth/services/user.service";


@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {
  id: number;
  team: Team;


  constructor(private route: ActivatedRoute,private router: Router,
              private adminService: AdminService, private userService: UserService) { }

  ngOnInit() {
    this.team = new Team();
    this.id = this.route.snapshot.params['id'];
    this.userService.getTeamById(this.id)
      .subscribe(data => {
        console.log(data);
        this.team = data;
      }, error => console.log(error));
  }

  updateTeam() {
    this.adminService.updateTeam(this.id, this.team)
      .subscribe(data => console.log(data), error => console.log(error));
    this.team = new Team();
    this.gotoList();
  }

  onSubmit() {
    this.updateTeam();
  }

  gotoList() {
    this.router.navigate(['/teams']);
  }

}
