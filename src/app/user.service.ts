import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //defining class properties with apiUrl
  apiUrl = 'https://api.github.com/users';

  //inject HttpClient as http
  constructor(private http: HttpClient) { }
}
