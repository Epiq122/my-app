import { Component } from '@angular/core';
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';

import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Keyboard',
      price: 100,
      categories: {
        1: 'Computing',
        2: 'Peripherals',
      },
    },
    {
      id: 2,
      title: 'Microphone',
      price: 35,
      categories: {
        3: 'Multimedia',
      },
    },
    {
      id: 3,
      title: 'Web Camera',
      price: 79,
      categories: {
        1: 'Computing',
        3: 'Multimedia',
      },
    },
    {
      id: 4,
      title: 'Tablet',
      price: 500,
      categories: {
        4: 'Entertainment',
      },
    },
  ];

  selectedProduct: Product | undefined = this.products[0];

  onAdded(product: Product) {
    alert(`${this.selectedProduct?.title} added to cart`);
  }
}
