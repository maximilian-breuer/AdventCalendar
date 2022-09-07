import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { gifts } from 'src/assets/assets';

@Component({
  selector: 'app-calendar-gallery',
  templateUrl: './calendar-gallery.component.html',
  styleUrls: ['./calendar-gallery.component.scss'],
})
export class CalendarGalleryComponent implements OnInit {
  gifts = gifts;

  public masonryOptions: NgxMasonryOptions = {
    gutter: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
