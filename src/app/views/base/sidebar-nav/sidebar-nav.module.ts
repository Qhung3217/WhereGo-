import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebar-nav.component';

@NgModule({
  declarations: [SidebarNavComponent],
  imports: [CommonModule],
  exports: [SidebarNavComponent],
})
export class SidebarNavModule {}
