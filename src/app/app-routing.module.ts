import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';



const routes: Routes = [
  { path:'login',component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard]},
  { path: 'favourite', component: FavouriteComponent},
  { path: '', redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
