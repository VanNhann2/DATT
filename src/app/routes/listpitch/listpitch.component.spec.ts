import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpitchComponent } from './listpitch.component';

describe('ListpitchComponent', () => {
  let component: ListpitchComponent;
  let fixture: ComponentFixture<ListpitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
