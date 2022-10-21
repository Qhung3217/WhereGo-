import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { ErrorResponse } from '../../interfaces/error-response.interface';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse) => {
        console.log(errorResponse);

        const errorMessage: ErrorResponse = this.handleError(errorResponse);
        this.toastService.showError('Error', errorMessage.message);
        return throwError(() => errorMessage);
      })
    );
  }
  private handleError(errRes: HttpErrorResponse) {
    console.log(errRes);
    let errorMessage: ErrorResponse = {
      statusCode: errRes.status,
      message: 'An unknown error occurred',
    };
    if (!errRes.error && !errRes.error?.error) return errorMessage;
    switch (errRes.status) {
      case 500:
        errorMessage.message = '500 Internal Server Error';
        break;
      case 503:
        errorMessage.message = '503 Internal Server';
        break;
      case 404:
        errorMessage.message = '404 Not Found';
        break;
      case 403:
        errorMessage.message = errRes.error;
        break;
      case 400:
        if (this.checkUrl('/reset-password'))
          errorMessage = this.catchResetPasswordError(errRes);
        if (this.checkUrl('/sign-up'))
          errorMessage.message = this.catchSignUpError(errRes);
        break;
      case 401:
        errorMessage.message = this.messageUnauthorized();
        break;
      case 412:
        errorMessage.message = errRes.error?.message;
        break;
      default:
        errorMessage.message = errRes.message;
        break;
    }

    return errorMessage;
  }
  private catchSignUpError(errRes: HttpErrorResponse) {
    let message = '';
    switch (true) {
      case !!errRes.error?.email && !!errRes.error?.email:
        message = 'Email and phone already existed';
        break;
      case !!errRes.error?.phone:
        message += 'Phone already existed';
        break;
      case !!errRes.error?.email:
        message += 'Email already existed';
        break;
    }

    return message;
  }
  private catchResetPasswordError(errRes: HttpErrorResponse) {
    let message = errRes.error;

    return message;
  }

  private messageUnauthorized() {
    switch (true) {
      case this.checkUrl('/auth/traveler/login'):
      case this.checkUrl('/auth/writter/login'):
        return 'Email or password incorrect';
      default:
        return '401 Unauthorized';
    }
  }
  private checkUrl(url: string) {
    let currentUrl = this.router.url;
    const indexOfQuestionMark = currentUrl.indexOf('?');
    if (indexOfQuestionMark !== -1)
      currentUrl = this.router.url.slice(0, indexOfQuestionMark);

    console.dir(currentUrl);
    return currentUrl && currentUrl == url;
  }
}
