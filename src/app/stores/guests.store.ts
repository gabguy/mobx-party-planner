import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx';
import * as _ from 'lodash';

import { Guest } from '../models/guest.model';

export type GuestsFilter = 'all' | 'attending' | 'notAttending';

@Injectable()
export class GuestsStore {
  @observable guests: Guest[] = [];
  @observable filter: GuestsFilter = 'all';

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

  @action setFilter(filter: GuestsFilter) {
    this.filter = filter;
  }

  @computed get filteredGuests() {
    switch(this.filter) {
      case 'attending':
        return this._getFilteredGuests(true);
      case 'notAttending':
        return this._getFilteredGuests(false);
      default:
        return this.guests;
    }
  }

  @computed get attendingGuestsAmount() {
    return this._getFilteredGuests(true).length;
  }

  private _getGuestIndex(guestId: number): number {
    return _.findIndex(this.guests, {id: guestId});
  }

  private _getFilteredGuests(isAttending: boolean): Guest[] {
    return _.filter(this.guests, {attending: isAttending});
  }
}
