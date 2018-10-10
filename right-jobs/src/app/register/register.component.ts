import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  employerRegisterForm: FormGroup;
  jobseekerRegisterForm: FormGroup;
  cities = ["Islamabad", "Rawalpindi","Lahore", "Faisalabad"];
  gender = ["Male", "Female"];
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
 
  ngOnInit() {
    this.employerRegisterForm = this.formBuilder.group({
        companyName: ['', Validators.required],
        companySize: ['', [Validators.required,Validators.min(1)]],
        designation: ['', Validators.required],
        jobTitle: ['', Validators.required],
        contactPersonName: ['',  [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
        city: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        cnic: ['', [Validators.required, Validators.minLength(15)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        captcha:[null,Validators.required]
    });
    this.jobseekerRegisterForm = this.formBuilder.group({  
      firstName: ['',  [Validators.required,Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['',  [Validators.required,Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      captcha:[null,Validators.required]
  });
}

get f() { return this.employerRegisterForm.controls; }
get jf() { return this.jobseekerRegisterForm.controls; }

cnicKeyDown (event) { 
  if (event.keyCode == 8 || event.keyCode == 9 
    || event.keyCode == 27 || event.keyCode == 13 
    || (event.keyCode == 65 && event.ctrlKey === true) )
        return;
  if((event.keyCode < 48 || event.keyCode > 57))
  event.preventDefault();
  console.log(event.target.value.length );
  let length = event.target.value.length;               
  if(length == 5 || length == 13) {
    event.target.value = event.target.value + "-";
  }
}

onEmployerSubmit() {        
    this.submitted = true;    
    if(this.employerRegisterForm.invalid) {
      return;
    }
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users)
    let user = this.employerRegisterForm.value;
    if (!users) {
      users = [];
      users.push(user);
    } else {
      users.push(user);
    }
    
    console.log(users);
    this.loading = true;
    localStorage.setItem('users',JSON.stringify(users));
    alert("registration successfull");
    this.router.navigate(['/login']);
  }

onJobseekerSubmit() {
  this.submitted = true;
  if(this.jobseekerRegisterForm.invalid) {
    return;
  }
  let users = JSON.parse(localStorage.getItem('users'));
  console.log(users)
  let user = this.jobseekerRegisterForm.value;
  if (!users) {
    users = [];
    users.push(user);
  } else {
    users.push(user);
  }
  
  console.log(users);
  this.loading = true;
  localStorage.setItem('users',JSON.stringify(users));
  alert("registration successfull");
  this.router.navigate(['/login']);
  }

}
