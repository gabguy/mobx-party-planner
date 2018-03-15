import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pp-attending',
  templateUrl: './attending.component.html',
  styleUrls: ['./attending.component.scss']
})
export class AttendingComponent implements OnInit {
  @Input() attendingGuests;

  constructor() { }

  ngOnInit() {
  }

}
