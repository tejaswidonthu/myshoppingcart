import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productItem.component.html',
  styleUrls: ['./productItem.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product;
  @Input() index : number;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  addToCart(){
    console.log("added to cart" + "  " + this.product);
    this.productService.addToCart(this.product);
  }

}
