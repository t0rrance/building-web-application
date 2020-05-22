import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {UnathorizedComponent} from "./auth/components/unathorized/unathorized.component";
import {NotFoundComponent} from "./auth/components/not-found/not-found.component";
import {Role} from "./auth/models/role";
import {AuthGuard} from "./auth/guards/auth.guard";
import {AdminComponent} from "./auth/components/admin/admin.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {ProfileComponent} from "./auth/components/profile/profile.component";
import {DetailComponent} from "./auth/components/detail/detail.component";
import {EmployeeListComponent} from "./web/employee/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./web/employee/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./web/employee/update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./web/employee/employee-details/employee-details.component";
import {TeamListComponent} from "./web/team/team-list/team-list.component";
import {TeamDetailsComponent} from "./web/team/team-details/team-details.component";
import {CreateTeamComponent} from "./web/team/create-team/create-team.component";
import {UpdateTeamComponent} from "./web/team/update-team/update-team.component";
import {ProjectListComponent} from "./web/project/project-list/project-list.component";
import {ProjectDetailsComponent} from "./web/project/project-details/project-details.component";
import {CreateProjectComponent} from "./web/project/create-project/create-project.component";
import {UpdateProjectComponent} from "./web/project/update-project/update-project.component";
import {TimeRegisterListComponent} from "./web/dailyregister/time-register-list/time-register-list.component";
import {TimeRegisterDetailsComponent} from "./web/dailyregister/time-register-details/time-register-details.component";
import {CreateTimeRegisterComponent} from "./web/dailyregister/create-time-register/create-time-register.component";
import {UpdateTimeRegisterComponent} from "./web/dailyregister/update-time-register/update-time-register.component";
import {QuoteBookComponent} from "./quote-book/quote-book.component";


const routes: Routes = [
  //public pages
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  //user+admin
  {path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.USER, Role.ADMIN]}
  },
  {path:'detail/:id',
    component:DetailComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {path:'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  //mk
  {path:'employees',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'admin/employees/details/:id',
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'admin/employees/create',
    component: CreateEmployeeComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {path:'admin/employees/update/:id',
    component: UpdateEmployeeComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

//team
  {path:'teams',
    component: TeamListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'admin/teams/details/:id',
    component: TeamDetailsComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'admin/teams/create',
    component: CreateTeamComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {path:'admin/teams/update',
    component: UpdateTeamComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

//project
  {path:'projects',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'admin/projects/details/:id',
    component: ProjectDetailsComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'admin/projects/create',
    component: CreateProjectComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {path:'admin/projects/update/:id',
    component: UpdateProjectComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  //project
  {path:'registers',
    component: TimeRegisterListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {path:'admin/registers/details/:id',
    component: TimeRegisterDetailsComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'user/registers/create',
    component: CreateTimeRegisterComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN, Role.USER]}
  },
  {path:'admin/registers/update/:id',
    component: UpdateTimeRegisterComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  //Quote ---------------------------------
  {path:'admin/quotes',
    component: QuoteBookComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  //public error pages.
  {path:'404', component: NotFoundComponent},
  {path:'401', component: UnathorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    //For unkhown pages
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
