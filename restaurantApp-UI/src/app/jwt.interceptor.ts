import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService, public router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let jwtToken = this.authService.getJwtToken();
    if (jwtToken) request = this.addToken(request, jwtToken);

    return  next.handle(request).pipe(catchError(error => {
      // console.log('Error 401 !');
      if (error?.status === 401) {
        console.log('Unauthorized Access 401 !');
        this.authService.logout();
        this.router.navigate(['']);
      }
      return next.handle(request);
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
  }

}
