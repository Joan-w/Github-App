import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
