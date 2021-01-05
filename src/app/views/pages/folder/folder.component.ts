import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot);

    this.userService
      .folder(this.route.snapshot.params.folderId)
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit(): void {}
}
