import { Component, OnDestroy, OnInit } from '@angular/core';
import { of,from, Subscription, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './observable-tap.component.html',
  styleUrl: './observable-tap.component.css'
})
export class ObservableTapComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Observable Tap';

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
          tap(a => console.log('Apple: ', a))
        ).subscribe();
      
      this.subNumbers = this.numbers$
        .pipe(
          tap(a => console.log('Number: ', a))
        ).subscribe();
    }
  
    ngOnDestroy(): void {
      this.subApples.unsubscribe();
      this.subNumbers.unsubscribe();
    }
}
