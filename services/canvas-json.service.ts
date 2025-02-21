import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanvasJsonService {

  constructor() { }

  private canvasDataSubject = new BehaviorSubject<any>(null)

  saveCanvasData(data : any) {
    this.canvasDataSubject.next(data)
  }

  loadCanvasData(): Observable<any>  {
    return this.canvasDataSubject.asObservable();
  }
}
