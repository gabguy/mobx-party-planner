import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Guest } from '../../models/guest.model';

export type GuestsFilter = 'all' | 'attending' | 'notAttending';

@Component({
  selector: 'pp-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  @Input() guests: Guest[];
  @Input() attendingGuests: Guest[];
  @Input() notAttendingGuests: Guest[];
  @Output() remove = new EventEmitter<number>();
  @Output() setAttending = new EventEmitter<{guestId: number, attending: boolean}>();
  filter: GuestsFilter = 'all';

  constructor() { }

  ngOnInit() { }

  removeGuest(guest: Guest) {
    this.remove.emit(guest.id);
  }

  toggleAttending(guest: Guest, attending: boolean) {
    this.setAttending.emit({guestId: guest.id, attending});
  }
}
