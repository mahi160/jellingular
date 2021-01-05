import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './views/pages/home/home.component';
import { LoginModule } from './views/pages/login/login.module';
import { SelectServerComponent } from './views/pages/select-server/select-server.component';
import { FolderComponent } from './views/pages/folder/folder.component';
import { TickToTimePipe } from './pipes/tick-to-time.pipe';

@NgModule({
  declarations: [AppComponent, SelectServerComponent, HomeComponent, FolderComponent, TickToTimePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    LoginModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
