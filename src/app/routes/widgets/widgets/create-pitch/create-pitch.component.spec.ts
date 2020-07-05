import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePitchComponent } from './create-pitch.component';

describe('CreatePitchComponent', () => {
  let component: CreatePitchComponent;
  let fixture: ComponentFixture<CreatePitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
