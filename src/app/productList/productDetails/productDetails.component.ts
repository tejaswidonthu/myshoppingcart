import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product : Product;
  id : number;
  imgSource : string;
  @Output() close = new EventEmitter<void>();
  images  : string[] = null;
  constructor(private productService : ProductService,
    private route: ActivatedRoute,
    private router : Router) {
     }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe(
      (params:Params)=>{
         this.id = +params['id'];
         console.log(this.id);
        this.product = this.productService.getProduct(this.id);
        this.images = this.product.imagePath;
        this.imgSource = this.product.imagePath[0];
      }
    );
  }

  onImgClick(imageClicked : string){
    this.imgSource = imageClicked;
  }
  
    onClose(){
      this.router.navigate(['../'],{relativeTo:this.route});
    }
}