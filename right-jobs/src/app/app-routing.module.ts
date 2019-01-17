import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PostvacancyComponent } from './postvacancy/postvacancy.component';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './jobseeker/dashboard/dashboard/dashboard.component';
import { MainComponent } from './jobseeker/dashboard/main.component';
import { ProfileComponent } from './jobseeker/dashboard/profile/profile.component';
import { JobsComponent } from './jobseeker/dashboard/jobs/jobs.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'postvacancy',canActivate:[AuthenticationService], component: PostvacancyComponent },
  { path: 'jobseeker',canActivate:[AuthenticationService],component: DashboardComponent, children:[
    {path: 'dashboard',component: MainComponent},
    {path: 'profile',component: ProfileComponent},
    {path: 'myjobs',component: JobsComponent},
    {path: '',component: MainComponent}
  ] },

  { path: '**', redirectTo: 'login' }
];
 
@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
