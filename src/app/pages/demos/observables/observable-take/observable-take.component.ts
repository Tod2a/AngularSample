import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, of, Subscription, take, tap, timer } from 'rxjs';

@Component({
  selector: 'pm-observable-take',
  standalone: true,
  imports: [],
  templateUrl: './observable-take.component.html',
  styleUrl: './observable-take.component.css',
})
export class ObservableTakeComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Observable Take';

  numbers$ = of(2, 3, 4, 6, 8, 10);

  subNumbers!: Subscription;
  subNumbersSecond!: Subscription;
  subTimer!: Subscription;

  ngOnInit(): void {
    this.subNumbers = this.numbers$
      .pipe(
        tap((item) => console.log('First observable, first tap: ', item)),
        take(2),
        filter((x) => x % 2 === 0),
        tap((item) => console.log('First observable, second tap: ', item))
      )
      .subscribe({
        next: (item) => console.log('First observable, subscribe next: ', item),
        complete: () =>
          console.log('First observable complete, Take si before filter'),
      });

    this.subNumbersSecond = this.numbers$
      .pipe(
        tap((item) => console.log('Second observable, first tap: ', item)),
        filter((x) => x % 2 === 0),
        take(2),
        tap((item) => console.log('Second observable, second tap: ', item))
      )
      .subscribe({
        next: (item) =>
          console.log('Second observable, subscribe next: ', item),
        complete: () => console.log('Second observable, Take si after filter'),
      });

    this.subTimer = timer(0, 1000)
      .pipe(take(5))
      .subscribe({
        next: (item) => console.log('Timer: ', item),
        error: (err) => console.error('Timer error occured: ', err),
        complete: () => console.log('No more ticks'),
      });
  }

  ngOnDestroy(): void {
    this.subNumbers.unsubscribe();
    this.subNumbersSecond.unsubscribe();
    this.subTimer.unsubscribe();
  }
}
