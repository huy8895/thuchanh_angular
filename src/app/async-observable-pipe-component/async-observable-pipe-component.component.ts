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

  observable = new Observable((observer: Observer<any>) => {
    let count = 0;
    setInterval(() => {
      observer.next(count++);
      if (count > 10) {
        observer.complete();
      }
    }, 1000);

    // setTimeout(() => {
    //   observer.next(4);
    //   observer.complete();
    // }, 1000);
  });

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  time_no_asyn: any;


  ngOnInit(): void {
    console.log('before subscribe');
    this.time.subscribe({
        next: value => this.time_no_asyn = value,
        error: err => console.error('error: ' + err),
        complete: () => console.log('done'),
      }
    );
    // this.observable.subscribe({
    //   next: val => {
    //     console.log('next: ' + val);
    //   },
    //   error: err => console.error('error: ' + err),
    //   complete: () => console.log('done'),
    // });
    // console.log('after subscribe');
  }

}






