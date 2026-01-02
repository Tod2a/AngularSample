import { Component } from '@angular/core';

@Component({
  selector: 'pm-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  pagesTitle: string = 'Product Detail';
}
