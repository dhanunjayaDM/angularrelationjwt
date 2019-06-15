import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let token = window.localStorage.getItem('token');
   // let token=request.headers.get("token");
    console.log(token)
    window.localStorage.setItem('token', token);
    // debugger
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer '+ token
        }
      });
    }
    return next.handle(request);
  }
}