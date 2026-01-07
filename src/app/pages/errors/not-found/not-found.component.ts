import { Component } from '@angular/core';

@Component({
  selector: 'pm-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  pageTitle: string = 'Not Found';
}
