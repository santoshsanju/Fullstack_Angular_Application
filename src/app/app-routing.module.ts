import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { SignupComponent } from './body/signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:'/signup',pathMatch:'full'},
  {path:"home/:username",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"**",redirectTo:'/signup',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
