import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.users$ = this.userService.getAllUsers();
    this.users$.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
  showManual(): void {
    this.manualLogin = true;
  }
  onSelect(id: string): void {
    localStorage.setItem('user', id);
  }
}
