import {Component, OnInit} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';

@Component({
  selector: 'app-async-observable-pipe-component',
  templateUrl: './async-observable-pipe-component.component.html',
  styleUrls: ['./async-observable-pipe-component.component.css']
})
export class AsyncObservablePipeComponentComponent implements OnInit {


  constructor() {
  }

  static observable = new Observable((observer: Observer<any>) => {
    console.log('Rxjs và Reactive Programming');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  });

  static time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  ngOnInit(): void {
  }

}

console.log('before subscribe');
AsyncObservablePipeComponentComponent.time.subscribe({
  next: val => console.log('next: ' + val),
  error: err => console.error('error: ' + err),
  complete: () => console.log('done'),
});
console.log('after subscribe');



