import { Component } from '@angular/core';

@Component({
  selector: 'pm-unauthorized',
  standalone: true,
  imports: [],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css'
})
export class UnauthorizedComponent {
  pageTitle: string = 'Unauthorized';
}
