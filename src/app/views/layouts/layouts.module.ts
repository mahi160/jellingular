import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from './../../pipes/pipes.module';
import { MaterialModule } from './../../shared/material.module';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { SeriesTableComponent } from './series-table/series-table.component';

const Layouts = [MovieTableComponent, SeriesTableComponent];
@NgModule({
  declarations: [Layouts],
  imports: [CommonModule, MaterialModule, PipesModule],
  exports: [Layouts],
})
export class LayoutsModule {}
