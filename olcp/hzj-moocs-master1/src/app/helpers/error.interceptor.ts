import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return undefined;
  }

  // constructor(private authenticationService: AuthenticationService) {}
  //
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return next.handle(request).pipe(
  //     catchError(err => {
  //       if (err.status === 401) {
  //         this.authenticationService.logout();
  //         location.reload(true);
  //       }
  //
  //       const error = err.error.message || err.statusText;
  //       return throwError(error);
  //     }))
  // }

}
