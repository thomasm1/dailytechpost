import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class LoggingService {
    prevlog: string;

    printLog(message:string) {
        console.log(message);
        console.log(this.prevlog || '__no previous log__');
        this.prevlog = message;
    }
}