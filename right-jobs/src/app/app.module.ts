import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { PostvacancyComponent } from './postvacancy/postvacancy.component';
import { AuthenticationService } from './services/authentication.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './jobseeker/dashboard/dashboard/dashboard.component';
import { MainComponent } from './jobseeker/dashboard/main.component';
import { ProfileComponent } from './jobseeker/dashboard/profile/profile.component';
import { JobsComponent } from './jobseeker/dashboard/jobs/jobs.component';
// import {ToasterModule, ToasterService} from 'angular5-toaster';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingComponent,
    PostvacancyComponent,
    HeaderComponent,
    DashboardComponent,
    MainComponent,
    ProfileComponent,
    JobsComponent
  ],
  imports: [
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InternationalPhoneNumberModule,
    InternationalPhoneModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
    // ToasterModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
