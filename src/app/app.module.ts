import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TimerComponent } from './components/timer/timer.component';
import { AuctionListItemComponent } from './components/auction-list-item/auction-list-item.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    TimerComponent,
    AuctionListItemComponent,
    AuctionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatAnchor,
    MatSlideToggle,
    MatCard,
    MatCardContent,
    MatFormField,
    MatIcon,
    MatInput,
    MatButton,
    MatFormFieldModule,
    MatCardModule,
    MatTabGroup,
    MatTab
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: "outline",
        subscriptSizing: "dynamic"
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
