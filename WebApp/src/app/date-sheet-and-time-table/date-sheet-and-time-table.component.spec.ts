import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSheetAndTimeTableComponent } from './date-sheet-and-time-table.component';

describe('DateSheetAndTimeTableComponent', () => {
  let component: DateSheetAndTimeTableComponent;
  let fixture: ComponentFixture<DateSheetAndTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSheetAndTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSheetAndTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
