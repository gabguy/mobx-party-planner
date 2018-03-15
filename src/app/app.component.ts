import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Guest } from './models/guest.model';
import { GuestsStore } from './stores/guests.store';

@Component({
  selector: 'pp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(public guestsStore: GuestsStore) { }

  addGuest(guest: Guest) {
    this.guestsStore.addGuest(guest);
  }

  removeGuest(guestId: number) {
    this.guestsStore.removeGuest(guestId);
  }

  setGuestAttending({guestId, attending}) {
    this.guestsStore.setGuestAttending(guestId, attending);
  }
}
