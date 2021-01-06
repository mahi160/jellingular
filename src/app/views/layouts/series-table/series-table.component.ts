import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-series-table',
  templateUrl: './series-table.component.html',
  styleUrls: ['./series-table.component.scss'],
})
export class SeriesTableComponent implements OnInit {
  @Input() dataSource!: MatTableDataSource<any>;
  displayColumns = [
    'Name',
    'PremiereDate',
    'EndDate',
    'OfficialRating',
    'CommunityRating',
    'RunTimeTicks',
    'UnplayedItemCount',
    'Played',
    'Status',
  ];
  displayNames = [
    'Name',
    'Premiere Date',
    'Ending Date',
    'Rating',
    'IMDB Rating',
    'Per Episode Length',
    'Remaining Episodes',
    'Played Whole Season',
    'Status',
  ];
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
