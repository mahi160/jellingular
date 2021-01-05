import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  viewData$!: Observable<any>;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    this.viewData$ = this.userService.homePage();
    this.viewData$.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}
