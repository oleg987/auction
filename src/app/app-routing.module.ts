import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {AuctionListComponent} from './components/auction-list/auction-list.component';
import {notAuthenticatedGuard} from './not-authenticated.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [notAuthenticatedGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [notAuthenticatedGuard]
  },
  {
    path: 'auction-list',
    component: AuctionListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
