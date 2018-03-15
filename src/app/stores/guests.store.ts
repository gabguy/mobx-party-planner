import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx';
import * as _ from 'lodash';

import { Guest } from '../models/guest.model';

@Injectable()
export class GuestsStore {
  @observable guests: Guest[] = [];

  @action addGuest(guest: Guest) {
    this.guests = [...this.guests, {...guest, attending: false}];
  }

  @action removeGuest(guestId: number) {
    const guestIndex = this._getGuestIndex(guestId);
    if(guestIndex > -1) {
      this.guests = this.guests.filter((item, index) => index !== guestIndex);
    }
  }

  @action setGuestAttending(guestId: number, isAttending: boolean) {
    const index = this._getGuestIndex(guestId);
    if(index > -1) {
      this.guests[index].attending = isAttending;
    }
  }

  @computed get attendingGuests() {
    return _.filter(this.guests, {attending: true});
  }

  @computed get notAttendingGuests() {
    return _.filter(this.guests, {attending: false});
  }

  @computed get attendingGuestsAmount() {
    return _.filter(this.guests, {attending: true}).length;
  }

  private _getGuestIndex(guestId: number) {
    return _.findIndex(this.guests, {id: guestId});
  }
}
