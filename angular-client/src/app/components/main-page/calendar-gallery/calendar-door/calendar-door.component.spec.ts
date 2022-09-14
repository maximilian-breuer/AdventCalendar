import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDoorComponent } from './calendar-door.component';

describe('CalendarDoorComponent', () => {
  let component: CalendarDoorComponent;
  let fixture: ComponentFixture<CalendarDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
