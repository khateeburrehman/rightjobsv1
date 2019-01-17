import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  projects:any[] = [];
  educations:any[] = [];
  experiences:any[] = [];
  certifications:any[] = [];
  editProfData:any = {"name":"khateeb"};
  constructor() { }

  ngOnInit() {
  }

}
