import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRegisterListComponent } from './time-register-list.component';

describe('TimeRegisterListComponent', () => {
  let component: TimeRegisterListComponent;
  let fixture: ComponentFixture<TimeRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
