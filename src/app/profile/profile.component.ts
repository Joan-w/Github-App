import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../Services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;

  constructor(private profileService: ProfileService) { 
    
  }

  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getGithubUser().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
