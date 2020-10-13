import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UserpanalComponent } from './userpanal/userpanal.component';



@NgModule({
  declarations: [UsernavbarComponent, UserpanalComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
