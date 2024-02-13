import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { LoginComponent } from './components/login/login.component';
import { OfficerPageComponent } from './components/officer-page/officer-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin', component: AdminPageComponent},
  {path: 'officer', component: OfficerPageComponent},
  {path: 'order', component: OrderPageComponent}, 
  {path: 'login', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
