import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Guest } from '../../models/guest.model';
import { GuestsStore } from '../../stores/guests.store';

@Component({
  selector: 'pp-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGuestComponent implements OnInit {
  id: number = 0;
  guest: Guest;

  constructor(private guestsStore: GuestsStore) { }

  ngOnInit() {
    this._generateNewGuest();
  }

  addGuest() {
    if(this.guest.name) {
      this.guestsStore.addGuest(this.guest);
      this._generateNewGuest();
    }
  }

  private _generateNewGuest() {
    this.guest = {id: this.id++, name: ''};
  }

}
