import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {LoadingService} from './loading.service';
import { finalize } from 'rxjs/operators';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.loader.display(true);
    return next.handle(req).pipe(
      finalize(() => {
        this.loader.display(false);
      })
    );
  }
}
