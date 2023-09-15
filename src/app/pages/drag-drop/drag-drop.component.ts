import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productservice';
import { Product } from './products';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  products: Product[] | any;
    
  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(cars => this.products = cars);
  }

}
