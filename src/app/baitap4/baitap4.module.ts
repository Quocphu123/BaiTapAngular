import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4ListSmartPhoneComponent } from './baitap4-list-smart-phone/baitap4-list-smart-phone.component';
import { Baitap4ListLaptopComponent } from './baitap4-list-laptop/baitap4-list-laptop.component';
import { Baitap4ItemSanPhamComponent } from './baitap4-item-san-pham/baitap4-item-san-pham.component';
import { Baitap4PromotionComponent } from './baitap4-promotion/baitap4-promotion.component';

@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4ListSmartPhoneComponent, Baitap4ListLaptopComponent, Baitap4ItemSanPhamComponent, Baitap4PromotionComponent],
  exports :[Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
