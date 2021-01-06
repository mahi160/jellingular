import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-select-server',
  templateUrl: './select-server.component.html',
  styleUrls: ['./select-server.component.scss'],
})
export class SelectServerComponent implements OnInit {
  server = new FormGroup({
    serverUrl: new FormControl('http://192.168.31.103', Validators.required),
    port: new FormControl('8097', Validators.required),
    authApi: new FormControl(
      'de30162a665b4a31862e264507132618',
      Validators.required
    ),
  });
  logoUrl = 'http://192.168.31.103:8097/web/assets/img/banner-dark.png';
  constructor(private userService: UsersService) {}

  ngOnInit(): void {}
  onSubmit(): void {
    localStorage.setItem('api', this.server.controls.authApi.value);
    localStorage.setItem(
      'url',
      this.server.controls.serverUrl.value +
        ':' +
        this.server.controls.port.value
    );
  }
}
