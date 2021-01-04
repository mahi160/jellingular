import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/user.model';
import { environment } from './../../environments/environment';
import { usersApi } from './../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // httpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Cache-Control': 'no-cache',
  // });
  constructor(private http: HttpClient) {}
  getPublicUser(): Observable<any> {
    return this.http.get<any>(
      `${environment.serverApi}/${usersApi.publicUserList}`
    );
  }

  authUserLogin(user: UserLogin): Observable<UserLogin> {
    // let httpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Cache-Control': 'no-cache',

    // });
    // let options = {
    //   headers: httpHeaders,
    // };
    return this.http.post<UserLogin>(
      `${environment.serverApi}/${usersApi.userAuth}`,
      user
    );
  }
}
