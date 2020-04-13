import { Component, OnInit } from '@angular/core';
import { Github } from "../../Classes/github";

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  username:string;
  user:string[];
  repo:string[];

  constructor() { }

  ngOnInit() {
  }

}
