import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user';

let API_URL = "http://localhost:8080/api/user/";
let API_URL2 = "http://localhost:8080/api/admin/employees";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  user: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User> (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders(user ? {
      authorization:'Basic ' + btoa(user.username + ':' + user.password)
    }:{});

    return this.http.get<any> (API_URL + "login", {headers:headers}).pipe(
      map(response => {
        if(response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "logout", {}).pipe(
      map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      })
    );
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + "registration", JSON.stringify(user),
  {headers: {"Content-Type":"application/json; charset=UTF-8"}});
  }

// employee methods
  getEmployeesList(): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});
    return this.http.get( "http://localhost:8080/api/user/employees", {headers: this.headers} );
  }

  getEmployeesById(id: number): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});
    return this.http.get(API_URL+'employees/'+id , {headers: this.headers});
  }

  getEmployeesByTeamId(id:number): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});

    return this.http.get(API_URL+'employees/teamId/'+id , {headers: this.headers});
  }

// teams methods
  getTeamsList(): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});

    return this.http.get( API_URL+"teams", {headers: this.headers} );
  }

  getTeamById(id: number): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});
    return this.http.get(API_URL+'teams/'+id , {headers: this.headers});
  }

  //projects methods
  getProjectsList(): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});

    return this.http.get( API_URL+"projects", {headers: this.headers} );
  }

  getProjectById(id: number): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});

    return this.http.get(API_URL+'projects/'+id , {headers: this.headers});
  }

  getProjectByUserId(id: number): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});

    return this.http.get(API_URL+'projects/userId/'+id , {headers: this.headers});
  }

  //Registers method
  getRegistersList(): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});

    return this.http.get( API_URL+"registers", {headers: this.headers} );
  }


  createRegisters(hourWork: Object): Observable<Object> {
    // this.headers = new HttpHeaders(this.user ? {
    //   authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    // }:{});
    return this.http.post("http://localhost:8080/api/user/registers",hourWork , {headers: this.headers});
  }
   //quote method
  getQuoteList(): Observable<any> {
    this.headers = new HttpHeaders(this.user ? {
      authorization:'Basic ' + btoa(this.user.username + ':' + this.user.password)
    }:{});

    return this.http.get("http://localhost:8080/x",{headers: this.headers}  )
  }

}

