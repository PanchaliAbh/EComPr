import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'AdminnavbarComponent', component: AdminnavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
