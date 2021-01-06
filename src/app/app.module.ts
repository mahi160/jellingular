import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './views/pages/pages.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    // ? Core Modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // ? Shared Modules
    SharedModule,

    // ? User Modules
    PagesModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
