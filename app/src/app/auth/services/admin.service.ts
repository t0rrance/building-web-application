import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

let API_URL = "http://localhost:8080/api/admin/";
let API_URL2 = "http://localhost:8080/api/admin/employees";
let API_ADMIN_TEAM ="http://localhost:8080/api/admin/teams";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + "all", {headers: this.headers});
  }

  //mk
  getEmployeesById(id: number): Observable<any> {
    return this.http.get(API_URL2+'/'+id, {headers: this.headers} );
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post("http://localhost:8080/api/admin/employees", employee, {headers: this.headers});
  }

  updateEmployee(id: number, employee: Object): Observable<Object> {
    return this.http.put("http://localhost:8080/api/admin/employees"+'/'+id, employee, {headers: this.headers} );
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(API_URL2+'/'+id, {headers: this.headers} );
  }

 // team
  createTeam(team: Object): Observable<Object> {
     return this.http.post("http://localhost:8080/api/admin/teams", team, {headers: this.headers})
  }

  updateTeam(id: number, employee: Object): Observable<Object> {
    return this.http.put("http://localhost:8080/api/admin/teams"+'/'+id, employee, {headers: this.headers} );
  }

  deleteTeam(id: number) {
     return this.http.delete(API_ADMIN_TEAM+'/'+id, {headers: this.headers});
  }

  //project
  deleteProject(id: number) {
    return this.http.delete("http://localhost:8080/api/admin/projects"+'/'+id, {headers: this.headers});
  }

  createProject(team: Object): Observable<Object> {
    return this.http.post("http://localhost:8080/api/admin/projects", team, {headers: this.headers})
  }

  updateProject(id: number, employee: Object): Observable<Object> {
    return this.http.put("http://localhost:8080/api/admin/projects"+'/'+id, employee, {headers: this.headers} );
  }

  //Register methods
  deleteRegister(id: number) {
    return this.http.delete("http://localhost:8080/api/admin/registers"+'/'+id, {headers: this.headers} );
  }


}
