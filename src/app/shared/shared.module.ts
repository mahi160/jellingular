/**
 * This module exports all the modules shared across different modules
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { PipesModule } from './../pipes/pipes.module';
import { MaterialModule } from './material.module';

const Shared = [
  AppRoutingModule,
  MaterialModule,
  PipesModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, Shared],
  exports: [Shared],
})
export class SharedModule {}
