import { AfterViewInit, ViewChild, Component, viewChild } from '@angular/core';
import { Product } from '../product';

import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements AfterViewInit {
  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web Camera' },
    { id: 4, title: 'Tablet' },
  ];

  selectedProduct: Product | undefined = this.products[0];

  onAdded(product: Product) {
    alert(`${this.selectedProduct?.title} added to cart`);
  }

  productDetail = viewChild(ProductDetailComponent);

  ngAfterViewInit(): void {
    console.log(this.productDetail()!.product());
  }
}
