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
    return this.http.get<any>(
      `${environment.serverApi}/${usersApi.publicUserList}`
    );
  }
  getAllUsers(apiKey: string): Observable<any> {
    const options = {
      params: new HttpParams({ fromString: `api_key=${apiKey}` }),
    };
    return this.http.get<any>(
      `${environment.serverApi}/${usersApi.allUsers}`,
      options
    );
  }

  authUserLogin(user: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      `${environment.serverApi}/${usersApi.userAuth}`,
      user
    );
  }
}
