import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guest } from '../../models/guest.model';

@Component({
  selector: 'pp-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss']
})
export class AddGuestComponent implements OnInit {
  @Output() add = new EventEmitter<Guest>();
  id: number = 0;
  guest: Guest;

  constructor() { }

  ngOnInit() {
    this._generateNewGuest();
  }

  addGuest() {
    if(this.guest.name) {
      this.add.emit(this.guest);
      this._generateNewGuest();
    }
  }

  private _generateNewGuest() {
    this.guest = {id: this.id++, name: ''};
  }

}
