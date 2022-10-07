import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebar-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarNavComponent],
})
export class SidebarNavModule {}
