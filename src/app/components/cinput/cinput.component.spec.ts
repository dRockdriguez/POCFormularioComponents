import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinputComponent } from './cinput.component';

describe('CinputComponent', () => {
  let component: CinputComponent;
  let fixture: ComponentFixture<CinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
