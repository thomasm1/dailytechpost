import { isDevMode } from "@angular/core";
import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export function loggingInterceptor<T>(request: HttpRequest<unknown>, next: HttpHandlerFn)  {
    if (!isDevMode()) {
        return next(request);
    }
    // const req = request.clone({
    //     headers: request.headers.set('X-Debug-Log', 'true')
    // })
    console.log('HTTP Request:', request);
    return next(request).pipe(
        tap({
            next: (event) => {
                if (event.type === HttpEventType.Response) {
                    console.log('HTTP Response:', event);
                    console.log('Response Body:', event.body);
                    console.log('Response Status:', event.status); 
                }
                console.log('HTTP Response:', event);
            },
            error: (error) => {
                console.error('HTTP Error:', error);
            }
        })
    );
}
