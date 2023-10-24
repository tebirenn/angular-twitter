import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSubject = new BehaviorSubject<string>('');

  getMessage(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  showError(message: string): void {
    this.messageSubject.next(message);
  }
}
