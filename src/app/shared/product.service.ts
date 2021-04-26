import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../productList/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   productChanged = new Subject<Product[]>();

  private products : Product[] = [
    new Product('Tasty Schnitzel','1231','₹751','This set of wooden building blocks includes 100 durable wooden blocks in different colors and shapes: the construction possibilities are endless! This classic educational toy provides hours of hands-on screen-free playtime, introduces early math concepts, teaches shape recognition, develops strong motor skills, and even resilience as kids experiment with building, knocking blocks over, and building again.'+

    'Learning cubes have 100 elements. The child can create any buildings from them, which will in turn develop creativity and imagination. Wooden blocks will serve you for a long time and provide your child with many years of interesting and creative fun. The wood is warm and pleasant to the touch.',['/assets/img/EXE.jpg',
    '/assets/img/EXE.jpg','/assets/img/100-Pcs-Wooden-Town-Block-Set-5 (1).jpg','/assets/img/100-Pcs-Wooden-Town-Block-Set-12-300x300.jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-5.jpg','/assets/img/100-Pcs-Wooden-Town-Block-Set-11-300x300.jpg','/assets/img/EXE.jpg','/assets/img/100-Pcs-Wooden-Town-Block-Set-5 (1).jpg','/assets/img/100-Pcs-Wooden-Town-Block-Set-12-300x300.jpg'],3
    ),
    new Product('Tasty Schnitzel','1232','₹752','simple Tasty Schnitzel recipe',['https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg',
    'https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg','https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg'],0
    ),
    new Product('Tasty Schnitzel','1233','₹753','simple Tasty Schnitzel recipe',['https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg',
    'https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg','https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg'],3
    ),
    new Product('Tasty Schnitzel','1234','₹754','simple Tasty Schnitzel recipe',['https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg',
    'https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg','https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg'],3
    ),
    new Product('Tasty Schnitzel','1235','₹755','simple Tasty Schnitzel recipe',['https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg',
    'https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg','https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg'],3
    ),
    new Product('Tasty Schnitzel','1236','₹756','simple Tasty Schnitzel recipe',['https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg',
    'https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg','https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg'],3
    ),
    new Product('Tasty Schnitzel','1237','₹757','simple Tasty Schnitzel recipe',['https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg',
    'https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg','https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg'],3
    ),
    new Product('Tasty Schnitzel','1238','₹758','simple Tasty Schnitzel recipe',['https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg',
    'https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg','https://image.shutterstock.com/image-photo/schnitzel-fried-potatoes-on-dark-260nw-482743804.jpg'],3
    )
  ];

  //private products : Product[] = [];
  
  constructor() { }

  setProducts(product : Product[]){
    this.products = product;
    this.productChanged.next(this.products.slice());
  }

  getProducts(){
    this.productChanged.next(this.products.slice());
    return this.products.slice();
  }

//   prepareShoppingList(ingredient : Ingredient[]){
//     this.slService.addIngredients(ingredient);
//   }

  getProduct(index : number){
    console.log(index);
    console.log(this.products);
        for(let i=0; i < this.products.length ;i++){
      if(Number(this.products[i].productId) == index)
      return this.products[i];
      }
   
  }

  addToCart(){

  }

//   addRecipe(recipe : Recipe){
//     this.recipes.push(recipe);
//     this.recipeChanged.next(this.recipes.slice());
//   }

//   updateRecipe(index: number, recipe: Recipe){
//     this.recipes[index] = recipe;
//     this.recipeChanged.next(this.recipes.slice());
//   }

//   deleteRecipe(index : number){
//     this.recipes.splice(index,1);
//     this.recipeChanged.next(this.recipes.slice());
//   }
}
