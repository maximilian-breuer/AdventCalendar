import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Gift, ContentImage } from 'src/assets/interfaces';

@Component({
  selector: 'app-calendar-door',
  templateUrl: './calendar-door.component.html',
  styleUrls: ['./calendar-door.component.scss'],
})
export class CalendarDoorComponent implements OnInit {
  @Input() content!: Gift;
  open = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    // this.open = new Date().getUTCDate() >= this.content.day ? true : false;
    this.open = 14 >= this.content.day ? true : false;
  }

  openDoor(contentModal: any) {
    if (this.open)
      this.modalService
        .open(contentModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
        .result.then(
          (result) => {},
          (reason) => {}
        );
  }

  isContentImage(cont: String | ContentImage) {
    return cont instanceof ContentImage;
  }
}
