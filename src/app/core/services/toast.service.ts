import { Injectable } from '@angular/core';
import { Toast } from '../interfaces/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: Toast[] = [];

  show(header: string, body: string) {
    this.toasts.push({ header, body });
  }
  showError(header: string, body: string) {
    this.toasts.push({ header, body, type: 'error' });
  }
  showInfor(header: string, body: string) {
    this.toasts.push({ header, body, type: 'infor' });
  }
  showWarn(header: string, body: string) {
    this.toasts.push({ header, body, type: 'warning' });
  }
  showSuccess(header: string, body: string) {
    this.toasts.push({ header, body, type: 'success' });
  }
  remove(toast: Toast) {
    console.log('remove');

    this.toasts = this.toasts.filter((t) => t != toast);
  }
}
