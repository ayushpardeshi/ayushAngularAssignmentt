import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {
    component: LoginComponent,
    path : 'login'
   },
   {
     component:UserComponent,
     path : 'user'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }