/**
 * All the pages are added here
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { FolderComponent } from './folder/folder.component';
import { HomeComponent } from './home/home.component';
import { LoginCardComponent } from './login/login-card/login-card.component';
import { LoginComponent } from './login/login.component';
import { SelectServerComponent } from './select-server/select-server.component';

const Pages = [
  FolderComponent,
  HomeComponent,
  SelectServerComponent,
  LoginComponent,
  LoginCardComponent,
];
@NgModule({
  declarations: [Pages],
  imports: [CommonModule, SharedModule],
  exports: [Pages],
})
export class PagesModule {}
