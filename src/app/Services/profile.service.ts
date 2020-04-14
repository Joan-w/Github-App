import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '188b28c453afdf055643';
  private clientsecret = '98ce4d87d13a9eb9506505721ba6613361bf5b6f';

  constructor(private http: HttpClient) {
    console.log('Vroooooooooom!');
    this.username = 'Joan-w';
  }

  getGithubUser(){
    return this.http.get("https://api.github.com/users/" + 
    this.username + "?client_id=" + this.clientid + "&client_secret=" 
    + this.clientsecret);
  }

  getRepos(){
    return this.http.get("https://api.github.com/users/" + 
    this.username + "/repos?client_id=" + this.clientid + "&client_secret=" 
    + this.clientsecret);
  }

  updateProfile(username:string){
    this.username = username;
  }
}
