import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  displayColumns = [
    'Name',
    'PremiereDate',
    'OfficialRating',
    'CommunityRating',
    'ProductionYear',
    'RunTimeTicks',
    'PlaybackPositionTicks',
    'PlayCount',
    'Played',
    'Key',
  ];
  pageOptions: number[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
      for (let i = 0; i < Math.ceil(res.Items.length / 25); i++) {
        this.pageOptions.push(25 * (i + 1));
        console.log(this.pageOptions);
      }
      this.dataSource = new MatTableDataSource(res.Items);
      // this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
