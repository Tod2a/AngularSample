import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../models/interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../../../shared/components/star/star.component';
import { ConvertToSpacesPipe } from '../../../shared/pipes/ConvertToSpaces.pipe';
import { ProductService } from '../../../core/services/product.service';

@Component({
  standalone: true,
  imports: [CommonModule, StarComponent, ConvertToSpacesPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  pagesTitle: string = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }
}
