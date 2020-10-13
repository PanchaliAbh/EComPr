import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanalComponent } from './adminpanal/adminpanal.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';



@NgModule({
  declarations: [AdminpanalComponent, AdminnavbarComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
