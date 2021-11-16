import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../productList/product.model';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit , OnDestroy{
  isCartEmpty = true;
  products : Product[]
  subscription : Subscription;
  constructor(private productService : ProductService) { }
  
  ngOnInit(): void {
    console.log("cart ck");
    this.products = this.productService.getCartItems();
    console.log(this.products);
         console.log(this.products.length);
         if(this.products.length >= 1)
         {
           this.isCartEmpty = false;
         }else{
           this.isCartEmpty = true;
         }
    // this.subscription = this.productService.productSelected.subscribe(
    //   (products : Product[])=>{
    //     this.products = products;
    //     console.log(this.products);
    //     console.log(this.products.length);
    //     if(this.products.length >= 1)
    //     {
    //       this.isCartEmpty = false;
    //     }else{
    //       this.isCartEmpty = true;
    //     }
    //   }
    // );     
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

  onCartItemDelete(i : number){
    this.productService.removeFromCart(i);
  }
}
