import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../shared/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit ,OnDestroy{
  products : Product[];
  subscription : Subscription;
  constructor(private productService : ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.subscription = this.productService.productChanged.subscribe(
    //   (products : Product[])=>{
    //     this.products = products;
    //   }
    // );    
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  ngOnDestroy(){
   // this.subscription.unsubscribe();
  }

}
