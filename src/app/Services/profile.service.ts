import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

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
}
