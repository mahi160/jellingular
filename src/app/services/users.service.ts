import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
