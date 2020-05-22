import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRegisterDetailsComponent } from './time-register-details.component';

describe('TimeRegisterDetailsComponent', () => {
  let component: TimeRegisterDetailsComponent;
  let fixture: ComponentFixture<TimeRegisterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRegisterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRegisterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
