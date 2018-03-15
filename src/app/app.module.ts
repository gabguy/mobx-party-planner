import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { GuestsComponent } from './components/guests/guests.component';
import { GuestsStore } from './stores/guests.store';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GuestsComponent,
    AddGuestComponent
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
