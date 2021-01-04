import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from 'src/app/models/user.model';
import { UsersService } from './../../../../services/users.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  loginCredential = new FormGroup({
    Username: new FormControl(''),
    Pw: new FormControl(''),
  });
  constructor(private userService: UsersService) {}

  ngOnInit(): void {}
  submitLogin() {
    console.log(this.loginCredential.value);

    const user: UserLogin = this.loginCredential.value;
    this.userService.authUserLogin(user).subscribe((res) => {
      console.log(res);
    });
  }
}
