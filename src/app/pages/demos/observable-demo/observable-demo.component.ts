import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, of, Subscription } from 'rxjs';

@Component({
  selector: 'pm-observable-demo',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css'
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Observable';

  keys: string [] = []

  sub!: Subscription;
  subArray!: Subscription;
  subFrom! : Subscription;
  subStrings! : Subscription;
  subEvent!: Subscription;
  subKeyDown!: Subscription;

  ngOnInit(): void {
    this.sub = of (2, 4, 6, 8).subscribe(item => console.log('Value from of: ', item));
    this.subArray = of ([2, 4, 6, 8]).subscribe(item => console.log('Value from of array: ', item));
    this.subFrom = from([20, 15, 10, 5]).subscribe({
      next: item => console.log('From item: ', item),
      error: err => console.log('From error: ', err),
      complete: () => console.log('From complete')
    });
    this.subStrings = of('test', 'second', 'three').subscribe({
      next: item => console.log('string: ', item),
      error: err => console.log('string error: ', err),
      complete : () => console.log('string complete')
    });
    this.subEvent = fromEvent(document, 'click').subscribe({
      next: ev => console.log('Click event: ', ev.target),
      error: err => console.log('Error occurered: ', err),
      complete: () => console.log('No more events')
    });
    this.subKeyDown = fromEvent(document, 'keydown').subscribe(
      ev => {
        console.log('key event: ', (ev as KeyboardEvent).key);
        this.keys.push((ev as KeyboardEvent).key);
        console.log('All pressed keys: ', this.keys);
      }
    );
  }

  ngOnDestroy(): void {
   this.sub.unsubscribe();
   this.subArray.unsubscribe();
   this.subFrom.unsubscribe();
   this.subStrings.unsubscribe();
   this.subEvent.unsubscribe();
   this.subKeyDown.unsubscribe();
  }
}
