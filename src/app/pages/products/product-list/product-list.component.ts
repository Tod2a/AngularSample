import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../models/interfaces/product.interface';
import { ConvertToSpacesPipe } from '../../../shared/pipes/ConvertToSpaces.pipe';
import { StarComponent } from '../../../shared/components/star/star.component';
import { ProductService } from '../../../core/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ConvertToSpacesPipe, StarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';  
  showImage: boolean = false;

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(this.listFilter);
  } 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
