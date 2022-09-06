import { Component, Input, OnInit } from '@angular/core';
import { Gift } from 'src/assets/interfaces';

@Component({
  selector: 'app-calendar-door',
  templateUrl: './calendar-door.component.html',
  styleUrls: ['./calendar-door.component.scss'],
})
export class CalendarDoorComponent implements OnInit {
  @Input() content!: Gift;
  open = false;

  constructor() {}

  ngOnInit(): void {}
}
