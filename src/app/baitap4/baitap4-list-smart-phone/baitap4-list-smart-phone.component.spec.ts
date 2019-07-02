import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ListSmartPhoneComponent } from './baitap4-list-smart-phone.component';

describe('Baitap4ListSmartPhoneComponent', () => {
  let component: Baitap4ListSmartPhoneComponent;
  let fixture: ComponentFixture<Baitap4ListSmartPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ListSmartPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ListSmartPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
