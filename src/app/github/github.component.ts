import { Component, OnInit } from '@angular/core';
import { Users } from "../Users-class/Users";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  username:string;
  user:string[];
  repos:string[];

  constructor(private http:HttpClient){}

  ngOnInit() {
    
    interface ApiResponse{
      user:string;
      repos:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users").subscribe(data=>{
      this.user = new User(data.user, data.repos)
    })
  }

}