import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users$!: Observable<any>;
  manualLogin = false;
  constructor(private userService: UsersService) {
    this.users$ = this.userService.getPublicUser();
    if (!this.users$) {
      this.manualLogin = true;
    }
  }

  ngOnInit(): void {}
  showManual(): void {
    this.manualLogin = true;
  }
}
