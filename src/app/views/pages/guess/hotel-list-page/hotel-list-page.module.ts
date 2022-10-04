import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListPageComponent } from './hotel-list-page.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SidebarNavModule } from 'src/app/views/base/sidebar-nav/sidebar-nav.module';
import { FilterBoxModule } from 'src/app/shared/components/filter-box/filter-box.module';

@NgModule({
  declarations: [HotelListPageComponent],
  imports: [CommonModule, BreadcrumbModule, SidebarNavModule, FilterBoxModule],
  exports: [HotelListPageComponent],
})
export class HotelListPageModule {}
