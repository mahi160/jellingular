import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/user.model';
import { environment } from './../../environments/environment';
import { usersApi } from './../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getPublicUser(): Observable<any> {
    return this.http.get<any>(`${usersApi.publicUserList}`);
  }
  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${usersApi.allUsers}`);
  }

  homePage() {
    return this.http.get(`${usersApi.views}`);
  }

  folder(itemId: string) {
    const options = {
      params: new HttpParams({
        fromString: `api_key=${localStorage.getItem('api')}&parentId=${itemId}`,
      }),
    };
    return this.http.get(`${usersApi.folder}`, options);
  }

  authUserLogin(user: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${usersApi.userAuth}`, user);
  }
}
