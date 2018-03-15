import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { GuestsStore } from '../../stores/guests.store';
import { Guest } from '../../models/guest.model';

@Component({
  selector: 'pp-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestsComponent implements OnInit {

  constructor(public guestsStore: GuestsStore) { }

  ngOnInit() {
  }

  removeGuest(guest: Guest) {
    this.guestsStore.removeGuest(guest.id);
  }

  toggleAttending(guest: Guest) {
    this.guestsStore.setGuestAttending(guest.id, !guest.attending);
  }

}
