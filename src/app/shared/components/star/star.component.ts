import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnChanges {
  @Input({ required: true }) rating!: number;
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }
}
