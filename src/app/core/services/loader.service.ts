import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderShowSubject = new BehaviorSubject(false);

  getLoaderState(): Observable<boolean> {
    return this.loaderShowSubject.asObservable();
  }

  hideLoader() {
    this.loaderShowSubject.next(false);
  }

  showLoader() {
    this.loaderShowSubject.next(true);
  }

}
