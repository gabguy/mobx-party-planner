import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Guest } from '../../models/guest.model';
import { GuestsFilter } from '../../stores/guests.store';

@Component({
  selector: 'pp-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent {
  @Input() guests: Guest[];
  @Output() remove = new EventEmitter<number>();
  @Output() setAttending = new EventEmitter<{guestId: number, attending: boolean}>();
  @Output() filterChanged = new EventEmitter<GuestsFilter>();

  toggleAttending(guest: Guest, attending: boolean) {
    this.setAttending.emit({guestId: guest.id, attending});
  }
}
