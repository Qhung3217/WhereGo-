import { SearchIconModule } from 'src/app/shared/icons/search-icon/search-icon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { NewspaperIconModule } from 'src/app/shared/icons/newspaper-icon/newspaper-icon.module';
import { MenuIconModule } from 'src/app/shared/icons/menu-icon/menu-icon.module';
import { XIconModule } from 'src/app/shared/icons/x-icon/x-icon.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HeartIconModule,
    NewspaperIconModule,
    SearchIconModule,
    MenuIconModule,
    XIconModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
