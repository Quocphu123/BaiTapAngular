import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemSanPhamComponent } from './baitap4-item-san-pham.component';

describe('Baitap4ItemSanPhamComponent', () => {
  let component: Baitap4ItemSanPhamComponent;
  let fixture: ComponentFixture<Baitap4ItemSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
