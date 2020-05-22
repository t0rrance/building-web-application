import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../auth/models/user";
import {UserService} from "../../../auth/services/user.service";
import {Router} from "@angular/router";
import {AdminService} from "../../../auth/services/admin.service";
import {Role} from "../../../auth/models/role";
import {Project} from "../project";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Observable<Project[]> ;
  currentUser: User;
  temp:Project[];

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

    this.projects = this.userService.getProjectsList();
    this.userService.getProjectsList()
      .subscribe(data => {
        console.log(data);
        this.temp = data;
      }, error => console.log(error));

  }

  deleteProject(id: number) {

    this.adminService.deleteProject(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));

  }

  projectUpdate(id: number) {
    this.router.navigate(["admin/projects/update",id]);
  }

  projectDetails(id: number){
    this.router.navigate(["admin/projects/details",id]);
  }

  downloadPDF() {

    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).download();

  }
  openOnWeb() {
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.createPdf(documentDefinition).open();
  }
  getDocumentDefinition() {
    return {
      content: [
        {
          text: 'Lista projektów',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          text: "Autor: "+this.currentUser.name,
          style: 'header'
        },
        {
          table: {
            widths: ['*', '*', '*', '*'],
            body: [
              [{
                text: 'Nazwa projektu',
                style: 'tableHeader'
              },
                {
                  text: 'Status projektu',
                  style: 'tableHeader'
                },
                {
                  text: 'Kierownik projektu',
                  style: 'tableHeader'
                },
                {
                  text: 'Nazwa ekipy',
                  style: 'tableHeader'
                },
              ],
              ...this.temp.map(col => {
                return [col.projectName , col.projectStatus, col.user.name, col.team.teamName];
              })
            ]
          }
        }]
    };
  }


}
