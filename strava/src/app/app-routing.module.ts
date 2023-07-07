import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {UserComponent} from "./pages/user/user.component";
import {connexionGuard} from "./utils/connexion.guard";

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [connexionGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
