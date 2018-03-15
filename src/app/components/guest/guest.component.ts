import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Guest } from '../../models/guest.model';

@Component({
  selector: 'pp-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  @Input() guest: Guest;
  @Output() toggleAttending = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
