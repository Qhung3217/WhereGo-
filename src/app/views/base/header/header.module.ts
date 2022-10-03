import { SearchIconModule } from 'src/app/shared/icons/search-icon/search-icon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { NewspaperIconModule } from 'src/app/shared/icons/newspaper-icon/newspaper-icon.module';
import { MenuIconModule } from 'src/app/shared/icons/menu-icon/menu-icon.module';
import { XIconModule } from 'src/app/shared/icons/x-icon/x-icon.module';
import { DropdownDirectiveModule } from 'src/app/shared/directives/dropdown-directive/dropdown-directive.module';
import { SearchModalModule } from 'src/app/shared/components/search-modal/search-modal.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,

    SearchModalModule,

    DropdownDirectiveModule,

    HeartIconModule,
    NewspaperIconModule,
    SearchIconModule,
    MenuIconModule,
    XIconModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
