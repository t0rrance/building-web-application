import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimeRegisterComponent } from './update-time-register.component';

describe('UpdateTimeRegisterComponent', () => {
  let component: UpdateTimeRegisterComponent;
  let fixture: ComponentFixture<UpdateTimeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTimeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTimeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
