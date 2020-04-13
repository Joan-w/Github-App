import { Component, OnInit } from '@angular/core';
import { Github } from "../../Classes/github";
import { GithubServiceService } from "../../Services/github-service.service";

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  username:string;
  user:string[];
  repo:string[];

  constructor(private githubService:GithubServiceService) {
    this.githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.githubService.getRepo().subscribe(repo => {
      console.log(repo);
      this.repo = repo;
    });
  }

  searchGithubUser(){
    this.githubService.replaceUser(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
