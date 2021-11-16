import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../productList/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  items : string;
  subscription : Subscription;
  constructor(private productService : ProductService) { }
  
  ngOnInit(): void {
    this.subscription = this.productService.productSelected.subscribe(
      (products : Product[])=>{
        this.items = products.length.toString();
      }
    );     
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
