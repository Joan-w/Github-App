import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private githubService:GithubService){}

  ngOnInit() {
    this.githubService.getUsers().subscribe((users) => {
      
    })
  }

}
