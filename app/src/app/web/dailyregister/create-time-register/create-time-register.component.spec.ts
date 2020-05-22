import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimeRegisterComponent } from './create-time-register.component';

describe('CreateTimeRegisterComponent', () => {
  let component: CreateTimeRegisterComponent;
  let fixture: ComponentFixture<CreateTimeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
