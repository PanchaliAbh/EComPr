import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminnavbarComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
