import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { GuestsComponent } from './components/guests/guests.component';
import { GuestsStore } from './stores/guests.store';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { FormsModule } from '@angular/forms';
import { AttendingComponent } from './components/attending/attending.component';
import { GuestComponent } from './components/guest/guest.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestsComponent,
    AddGuestComponent,
    AttendingComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MobxAngularModule
  ],
  providers: [GuestsStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
