import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebar-nav.component';
import { RouterModule } from '@angular/router';
import { SearchIconModule } from 'src/app/shared/icons/search-icon/search-icon.module';

@NgModule({
  declarations: [SidebarNavComponent],
  imports: [CommonModule, RouterModule, SearchIconModule],
  exports: [SidebarNavComponent],
})
export class SidebarNavModule {}
