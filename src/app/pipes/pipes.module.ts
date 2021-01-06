import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TickToTimePipe } from './tick-to-time.pipe';

const Pipes = [TickToTimePipe];
@NgModule({
  declarations: [Pipes],
  imports: [CommonModule],
  exports: [Pipes],
})
export class PipesModule {}
