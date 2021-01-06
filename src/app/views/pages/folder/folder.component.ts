import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './../../../services/users.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  folderData$!: Observable<any>;
  folderItem$!: Observable<any>;
  dataSource!: MatTableDataSource<any>;
  total: any;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params.folderId;
    this.folderItem$ = this.userService.folderItems(id);
    this.folderData$ = this.userService.folder(id);
  }

  ngOnInit(): void {
    this.folderItem$.subscribe((res) => {
      this.total = res.Items.length;
      this.dataSource = new MatTableDataSource(res.Items);
    });
  }
}
