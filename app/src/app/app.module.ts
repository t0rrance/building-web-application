import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UnathorizedComponent} from "./auth/components/unathorized/unathorized.component";
import {NotFoundComponent} from "./auth/components/not-found/not-found.component";
import {AdminComponent} from "./auth/components/admin/admin.component";
import {DetailComponent} from "./auth/components/detail/detail.component";
import {ProfileComponent} from "./auth/components/profile/profile.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {EmployeeListComponent} from "./web/employee/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./web/employee/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./web/employee/update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./web/employee/employee-details/employee-details.component";
import { TeamListComponent } from './web/team/team-list/team-list.component';
import { CreateTeamComponent } from './web/team/create-team/create-team.component';
import { TeamDetailsComponent } from './web/team/team-details/team-details.component';
import { UpdateTeamComponent } from './web/team/update-team/update-team.component';
import { CreateProjectComponent } from './web/project/create-project/create-project.component';
import { ProjectDetailsComponent } from './web/project/project-details/project-details.component';
import { ProjectListComponent } from './web/project/project-list/project-list.component';
import { UpdateProjectComponent } from './web/project/update-project/update-project.component';
import { CreateTimeRegisterComponent } from './web/dailyregister/create-time-register/create-time-register.component';
import { TimeRegisterDetailsComponent } from './web/dailyregister/time-register-details/time-register-details.component';
import { TimeRegisterListComponent } from './web/dailyregister/time-register-list/time-register-list.component';
import { UpdateTimeRegisterComponent } from './web/dailyregister/update-time-register/update-time-register.component';
import { QuoteBookComponent } from './quote-book/quote-book.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailComponent,
    AdminComponent,
    NotFoundComponent,
    UnathorizedComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    TeamListComponent,
    CreateTeamComponent,
    TeamDetailsComponent,
    UpdateTeamComponent,
    CreateTeamComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    UpdateProjectComponent,
    CreateTimeRegisterComponent,
    TimeRegisterDetailsComponent,
    TimeRegisterListComponent,
    UpdateTimeRegisterComponent,
    QuoteBookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
