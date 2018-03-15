import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx';
import * as _ from 'lodash';

import { Guest } from '../models/guest.model';

@Injectable()
export class GuestsStore {
  @observable guests: Guest[] = [];

  @action addGuest(guest: Guest) {
    this.guests.push({...guest, attending: false});
  }

  @action removeGuest(guestId: number) {
    const index = this._getGuestIndex(guestId);
    if(index > -1) {
      this.guests.splice(index, 1);
    }
  }

  @action setGuestAttending(guestId: number, isAttending: boolean) {
    const index = this._getGuestIndex(guestId);
    if(index > -1) {
      this.guests[index].attending = isAttending;
    }
  }

  @computed get attendingGuests() {
    return _.filter(this.guests, {attending: true}).length;
  }

  private _getGuestIndex(guestId: number) {
    return _.findIndex(this.guests, {id: guestId});
  }

}
