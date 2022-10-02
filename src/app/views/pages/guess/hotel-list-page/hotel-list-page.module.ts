import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListPageComponent } from './hotel-list-page.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SidebarNavModule } from 'src/app/views/base/sidebar-nav/sidebar-nav.module';

@NgModule({
  declarations: [HotelListPageComponent],
  imports: [CommonModule, BreadcrumbModule, SidebarNavModule],
  exports: [HotelListPageComponent],
})
export class HotelListPageModule {}
