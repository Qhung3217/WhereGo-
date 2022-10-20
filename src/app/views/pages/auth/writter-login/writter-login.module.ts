import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritterLoginComponent } from './writter-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [WritterLoginComponent],
  imports: [CommonModule, FormsModule, RouterModule, LoadingSpinnerModule],
  exports: [WritterLoginComponent],
})
export class WritterLoginModule {}
