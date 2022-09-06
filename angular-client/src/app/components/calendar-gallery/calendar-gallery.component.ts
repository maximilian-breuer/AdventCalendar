import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Gift } from 'src/assets/interfaces';

@Component({
  selector: 'app-calendar-gallery',
  templateUrl: './calendar-gallery.component.html',
  styleUrls: ['./calendar-gallery.component.scss'],
})
export class CalendarGalleryComponent implements OnInit {
  gifts: Gift[] = [];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 0,
  };

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 24; i++) {
      this.gifts.push({
        day: i,
        content: `Hi ${i}`,
        caption: `Cap ${i}`,
        width: 200,
        height: 200,
      });
    }
  }
}
