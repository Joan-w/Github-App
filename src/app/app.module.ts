import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from "./user.service";
import { AppComponent } from './app.component';
import { GithubUserComponent } from './Github/github-user/github-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
