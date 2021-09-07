import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add',
    component:RestaurantDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit',
    component:EditComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
