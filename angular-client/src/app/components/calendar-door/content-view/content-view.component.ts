import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent implements OnInit {
  openS(): void {
    console.log('hiiiii');
  }
  constructor() {}

  ngOnInit(): void {}
}
