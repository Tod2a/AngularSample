import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, from, Subscription, tap, filter } from 'rxjs';

@Component({
  selector: 'pm-observable-filter',
  standalone: true,
  imports: [],
  templateUrl: './observable-filter.component.html',
  styleUrl: './observable-filter.component.css',
})
export class ObservableFilterComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Observable Filter';

  numbers$ = of(2, 4, 5, 6, 8);

  subNumbers!: Subscription;

  ngOnInit(): void {
    this.subNumbers = this.numbers$
      .pipe(filter((item) => item % 2 === 0))
      .subscribe((x) => console.log('Number: ', x));
  }

  ngOnDestroy(): void {
    this.subNumbers.unsubscribe();
  }
}
