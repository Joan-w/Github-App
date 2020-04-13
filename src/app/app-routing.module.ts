import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubUsersComponent } from "./Github-User/github-users/github-users.component";
import { SingleUserComponent } from "./single-user/single-user.component";


const routes: Routes = [
  { path: '', component: GithubUsersComponent },
  { path: ':username', component: SingleUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
