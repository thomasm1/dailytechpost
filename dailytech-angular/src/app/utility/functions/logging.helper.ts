
import { isDevMode } from "@angular/core";

export class LoggingHelper {

  
  public debugLog(...args: unknown[]): void {
    if (isDevMode()) {
      console.log(...args);
    }
  }

  public debugWarn(...args: unknown[]): void {
    if (isDevMode()) {
      console.warn(...args);
    }
  }

  public debugError(...args: unknown[]): void {
    if (isDevMode()) {
      console.error(...args);
    }
  }

  public debugDir(value: unknown): void {
    if (isDevMode()) {
      console.dir(value);
    }
  }

  
}

export default LoggingHelper;
