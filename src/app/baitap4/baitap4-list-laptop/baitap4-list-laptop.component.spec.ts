import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ListLaptopComponent } from './baitap4-list-laptop.component';

describe('Baitap4ListLaptopComponent', () => {
  let component: Baitap4ListLaptopComponent;
  let fixture: ComponentFixture<Baitap4ListLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ListLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ListLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
