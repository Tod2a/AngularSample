import { Component, OnDestroy, OnInit } from '@angular/core';
import { of,from, map, Subscription } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './observable-map.component.html',
  styleUrl: './observable-map.component.css',
})
export class ObservableMapComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Observable Map';

  apples$ = from([
    { id: 1, type: 'macintosh' },
    { id: 2, type: 'gala' },
    { id: 3, type: 'pinklady' },
  ]);
  numbers$ = of(2, 4, 5, 6, 8);

  subApples!: Subscription;
  subNumbers!: Subscription;

  ngOnInit(): void {
    this.subApples = this.apples$
      .pipe(
        map(a => ({ ...a, color: 'red'}))
      ).subscribe(x => console.log('Apple: ', x));
    
    this.subNumbers = this.numbers$
      .pipe(
        map(n => n * 2)
      ).subscribe(x => console.log('Number: ', x));
  }

  ngOnDestroy(): void {
    this.subApples.unsubscribe();
    this.subNumbers.unsubscribe();
  }
}
