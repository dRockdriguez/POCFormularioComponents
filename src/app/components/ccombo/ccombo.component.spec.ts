import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcomboComponent } from './ccombo.component';

describe('CcomboComponent', () => {
  let component: CcomboComponent;
  let fixture: ComponentFixture<CcomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
