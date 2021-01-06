import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss'],
})
export class MovieTableComponent implements OnInit {
  @Input() dataSource!: MatTableDataSource<any>;
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
  displayNames = [
    'Name',
    'Premiere Date',
    'Rating',
    'IMDB Rating',
    'Production Year',
    'Runtime',
    'Playing',
    'Played',
    'Watched',
    'Key',
  ];
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
