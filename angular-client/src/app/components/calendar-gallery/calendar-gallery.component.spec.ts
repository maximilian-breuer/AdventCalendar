import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGalleryComponent } from './calendar-gallery.component';

describe('CalendarGalleryComponent', () => {
  let component: CalendarGalleryComponent;
  let fixture: ComponentFixture<CalendarGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
