import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/user.model';
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

  homePage(): Observable<any> {
    return this.http.get(`${usersApi.views}`);
  }

  folderItems(itemId: string): Observable<any> {
    const options = {
      params: new HttpParams({
        fromString: `api_key=${localStorage.getItem('api')}&parentId=${itemId}`,
      }),
    };
    return this.http.get(`${usersApi.folder}`, options);
  }
  folder(itemId: string): Observable<any> {
    const options = {
      params: new HttpParams({
        fromString: `api_key=${localStorage.getItem('api')}`,
      }),
    };
    return this.http.get(`${usersApi.folder}/${itemId}`, options);
  }

  authUserLogin(user: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${usersApi.userAuth}`, user);
  }
}
