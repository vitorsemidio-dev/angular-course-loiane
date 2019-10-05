import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEventsComponent } from './data-binding-events.component';

describe('DataBindingEventsComponent', () => {
  let component: DataBindingEventsComponent;
  let fixture: ComponentFixture<DataBindingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
