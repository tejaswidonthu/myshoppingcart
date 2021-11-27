import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../productList/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   productChanged = new Subject<Product[]>();
   productSelected = new Subject<Product[]>();

  private products : Product[] = [
    new Product('Tasty Schnitzel','1231','₹751','This set of wooden building blocks includes 100 durable wooden blocks in different colors and shapes: the construction possibilities are endless! This classic educational toy provides hours of hands-on screen-free playtime, introduces early math concepts, teaches shape recognition, develops strong motor skills, and even resilience as kids experiment with building, knocking blocks over, and building again.'+

    'Learning cubes have 100 elements. The child can create any buildings from them, which will in turn develop creativity and imagination. Wooden blocks will serve you for a long time and provide your child with many years of interesting and creative fun. The wood is warm and pleasant to the touch.',
    ['/assets/img/EXE.jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-5 (1).jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-12-300x300.jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-5.jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-11-300x300.jpg',
    '/assets/img/EXE.jpg','/assets/img/100-Pcs-Wooden-Town-Block-Set-5 (1).jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-12-300x300.jpg'],3
    ),
    new Product('Wooden memory match stick game','1232','₹752','Eeay to play：'+
    '1.Put all the pieces on the board, then throw the dice on the board,to see what color of the dice show；'+
    '2.Acoording the color of dice,find the same color‘s pieces according your memory;'+
    '3. If you get the same color, the piece will be your own，then, and you can throw the dice to continue playing;'+
    '4.otherwise, put the pieces back to the origina, the next participant to roll the dice， and look for the pieces;'+
    '5. At last，the side with the most chess pieces wins.'+
    '【How to Play 】 This object of this fun board game for kids is simple and funny. Roll the dice to reveal a color, find a matching color pin on the board and collect as many pieces as possible,It can be played with the family or with friends.'+
    '【Exercise Memory】This great family board game assists in as well as improving hand-eye learning games for children, Exercise and improve memory，Improve the ability to observe details，and prevent memory loss for elderly'+
    '【Funny board game】You can play board game at home or on the road, and you can also play games at the party. You can freely make rules to make the game more fun and challenging.'+
    '【Safety and environmental friendly】Our wooden toys focus on safety and children’s happy, Full of love and care for our children and the environment,can be used again and again.',
    ['/assets/img/Wooden-Story-natuerliches-1.jpg',    
    '/assets/img/Wooden-Story-natuerliches-2.jpg',
    '/assets/img/Wooden-Story-natuerliches-3.jpg',
    '/assets/img/Wooden-Story-natuerliches-4.jpg'],4
    ),
    new Product('Sequence for kids','1233','₹753','Good Quality sequence game just for kids'+
    'Ages 3 through 6'+
    '2 to 4 players'+
    'All in one box'+
    'Includes a folding game board, 42 playing cards, 21 red, 21 yellow, 21 blue and 21 green playing chips, instructions'+
    
    'Age 5 yrs and above',
    ['/assets/img/Sequence for kids1.jpg',    
    '/assets/img/Sequence for kids2.jpg',
    '/assets/img/Sequence for kids3.jpg',
    '/assets/img/Sequence for kids4.jpg'],4
    ),
    new Product('Dominos train with blocks','1234','₹754','Dominos train with blocks'+
    'Battery operated'+  
      
    'Super fun for your kids to play! Push one and watch the chain effect of the dominoes tumbling over like a race. See whose domino row runs down to the end fastest.'+
    'Our Domino Train Blocks Set is made of high quality plastic which is, no BPA or any other harmful substances.'+
    'Put the dominoes into the card clip and then put it on the train. The train will move forward and lay dominoes automatically while twisting left and right slowly.'+
    'Our Domino Train Blocks Set can develop childrens athletic ability, color cognitive ability, teamwork ability.'+
    'Playing Domino Blocks Train can promote the relationship between parents and children during the playing.',
    ['/assets/img/Dominos train with blocks1.jpg',    
    '/assets/img/Dominos train with blocks2.jpg',
    '/assets/img/Dominos train with blocks3.jpg',
    '/assets/img/Dominos train with blocks4.jpg',
    '/assets/img/Dominos train with blocks5.jpg'],3
    ),
    new Product('Montessori Wooden Knob Cylinders','1235','₹755','Dimension Discrimination – Using this material teaches the child visual discrimination of dimension.'+
    'Pincer Grip – This activity also helps the child develop his or her pincer grip which is necessary for writing.'+
    'Language Development – Play with toddlers as they work on it,they can use lots of great vocabulary such as: tall/er, short/er, wide/r, thin/ner, helps to develop language skills.',
    ['/assets/img/Montessori Wooden Knob Cylinders1.jpg',    
    '/assets/img/Montessori Wooden Knob Cylinders2.jpg',
    '/assets/img/Montessori Wooden Knob Cylinders3.jpg',
    '/assets/img/Montessori Wooden Knob Cylinders4.jpg',
    '/assets/img/Montessori Wooden Knob Cylinders5.jpg'],5
    ),
    new Product('Pop it fidget square dice game','1236','₹756','✅LIGHTWEIGHT AND EASY TO CARRY – There are hundreds of computer games that can stimulate play, but you must agree that this is not the same thing as playing with friends at your table. This toy is light in weight, can be carried with you, you can play by yourself or with other partners. So, enjoy this jumbo size fidget chess board with 2 pieces of dice. A practical, fun game for a joyful parent-child time. Giving you hours and hours of fun.'+
    '✅SMART TIP FOR PARENTS – Looking for something unique? Search no more because this educational giant board game is amazing and novel for sensory stimulation. It can help kids to concentrate and improve their logical thinking skills through entertainment. Unlike traditional toys for girls and boys, our large colourful push pop sensory toy triggers kids’ creativity and improves mathematical skills like chess checkers or ludo.'+
    '✅ SIMPLE AND EASY TO PLAY – Players need to press any number of rows in turn. The player who pushes the last mouse loses. It can exercise children’s hands and mind, which is very interesting and can inspire children. This big dimple poppet fidget featuring bright colors and cute sounds is sure to please your little one and yourself. Just press the pop bubbles down as they make a slight popping sound. Flip it over and start again.'+
    '✅ COMPLETELY SAFE AND DURABLE POP PUSH – Investing in a child-friendly bubble fidget toy that is safe from harmful chemicals is our main concern. That is why we have created this fantastic trendy massive pop it fidget toy ludo board game made of strong, BPA-free, nontoxic, and environmentally friendly silicone designed to ensure the safety of your family while having long-lasting durability.'+
    '✅ SOOTHE YOUR NERVES AND KEEP CALM – Want to see all the stress going away? If you haven’t tried using an autism fidget toy to calm your senses, now is the time. Endlessly reusable and washable, ideal for boredom when you’re home alone or simply passing the time and helping children calm down when dealing with anger or frustration, antistress and antianxiety experience provide you with immediate stress relief. How cool is that, right?',
    ['/assets/img/Pop it fidget square dice game1.jpg',    
    '/assets/img/Pop it fidget square dice game2.jpg',
    '/assets/img/Pop it fidget square dice game3.jpg'],3
    ),
    new Product('Bubble camera','1237','₹757','Works with 3AA battery'+

    'Comes with bubble liquid    ',
    ['/assets/img/Bubble camera1.jpg',    
    '/assets/img/Bubble camera2.jpg',
    '/assets/img/Bubble camera3.jpg',
    '/assets/img/Bubble camera4.jpg',
    '/assets/img/Bubble camera5.jpg'],5
    ),
    new Product('Wooden play set with a truck and four mini cars','1238','₹758','This wooden play-set is crafted in the image of a double-decker car mover. It is crafted in high-quality wood. This wood is durable and painted in bright colors to excite the child’s imagination. The paint is, of course, non-toxic.'+
    'The set comes with one truck and four cars so that the child can play with a realistic toy. This toy will help with motor skills as well as creativity. It is also a great toy to build a stronger relationship between parent and child as they play creatively for hours.'+
    'The truck is easy to load and move smoothly across the floors. This is a great toy for any child and will be a hit as a gift under the tree or for a third birthday.'+
    'Age: 3 +'+
    'Includes: Truck (x1), cars (x4)'+
    'Features:'+
    '– Material: Wood.'+
    '– Size: About 32 x 13 x 7cm.'+
    '– Wooden play set with a truck and four mini cars.'+
    '– Easy-load and lower ramps provide two levels for the vehicles.'+
    '– Made by high quality wood material, safe and durable for playing.'+
    '– Encourages motor skills and imaginative play.'+
    '– A great gift for kids.'+
   ' Note- Colours will be sent According to Availability',
    ['/assets/img/Wooden play set with a truck and four mini cars1.jpg',    
    '/assets/img/Wooden play set with a truck and four mini cars2.jpg',
    '/assets/img/Wooden play set with a truck and four mini cars3.jpg',
    '/assets/img/Wooden play set with a truck and four mini cars4.jpg'],4
    ),
    new Product('Tasty Schnitzel','1231','₹751','This set of wooden building blocks includes 100 durable wooden blocks in different colors and shapes: the construction possibilities are endless! This classic educational toy provides hours of hands-on screen-free playtime, introduces early math concepts, teaches shape recognition, develops strong motor skills, and even resilience as kids experiment with building, knocking blocks over, and building again.'+

    'Learning cubes have 100 elements. The child can create any buildings from them, which will in turn develop creativity and imagination. Wooden blocks will serve you for a long time and provide your child with many years of interesting and creative fun. The wood is warm and pleasant to the touch.',
    ['/assets/img/EXE.jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-5 (1).jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-12-300x300.jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-5.jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-11-300x300.jpg',
    '/assets/img/EXE.jpg','/assets/img/100-Pcs-Wooden-Town-Block-Set-5 (1).jpg',
    '/assets/img/100-Pcs-Wooden-Town-Block-Set-12-300x300.jpg'],3
    ),
    new Product('Wooden memory match stick game','1232','₹752','Eeay to play：'+
    '1.Put all the pieces on the board, then throw the dice on the board,to see what color of the dice show；'+
    '2.Acoording the color of dice,find the same color‘s pieces according your memory;'+
    '3. If you get the same color, the piece will be your own，then, and you can throw the dice to continue playing;'+
    '4.otherwise, put the pieces back to the origina, the next participant to roll the dice， and look for the pieces;'+
    '5. At last，the side with the most chess pieces wins.'+
    '【How to Play 】 This object of this fun board game for kids is simple and funny. Roll the dice to reveal a color, find a matching color pin on the board and collect as many pieces as possible,It can be played with the family or with friends.'+
    '【Exercise Memory】This great family board game assists in as well as improving hand-eye learning games for children, Exercise and improve memory，Improve the ability to observe details，and prevent memory loss for elderly'+
    '【Funny board game】You can play board game at home or on the road, and you can also play games at the party. You can freely make rules to make the game more fun and challenging.'+
    '【Safety and environmental friendly】Our wooden toys focus on safety and children’s happy, Full of love and care for our children and the environment,can be used again and again.',
    ['/assets/img/Wooden-Story-natuerliches-1.jpg',    
    '/assets/img/Wooden-Story-natuerliches-2.jpg',
    '/assets/img/Wooden-Story-natuerliches-3.jpg',
    '/assets/img/Wooden-Story-natuerliches-4.jpg'],4
    ),
    new Product('Sequence for kids','1233','₹753','Good Quality sequence game just for kids'+
    'Ages 3 through 6'+
    '2 to 4 players'+
    'All in one box'+
    'Includes a folding game board, 42 playing cards, 21 red, 21 yellow, 21 blue and 21 green playing chips, instructions'+
    
    'Age 5 yrs and above',
    ['/assets/img/Sequence for kids1.jpg',    
    '/assets/img/Sequence for kids2.jpg',
    '/assets/img/Sequence for kids3.jpg',
    '/assets/img/Sequence for kids4.jpg'],4
    ),
    new Product('Dominos train with blocks','1234','₹754','Dominos train with blocks'+
    'Battery operated'+  
      
    'Super fun for your kids to play! Push one and watch the chain effect of the dominoes tumbling over like a race. See whose domino row runs down to the end fastest.'+
    'Our Domino Train Blocks Set is made of high quality plastic which is, no BPA or any other harmful substances.'+
    'Put the dominoes into the card clip and then put it on the train. The train will move forward and lay dominoes automatically while twisting left and right slowly.'+
    'Our Domino Train Blocks Set can develop childrens athletic ability, color cognitive ability, teamwork ability.'+
    'Playing Domino Blocks Train can promote the relationship between parents and children during the playing.',
    ['/assets/img/Dominos train with blocks1.jpg',    
    '/assets/img/Dominos train with blocks2.jpg',
    '/assets/img/Dominos train with blocks3.jpg',
    '/assets/img/Dominos train with blocks4.jpg',
    '/assets/img/Dominos train with blocks5.jpg'],3
    ),
    new Product('Montessori Wooden Knob Cylinders','1235','₹755','Dimension Discrimination – Using this material teaches the child visual discrimination of dimension.'+
    'Pincer Grip – This activity also helps the child develop his or her pincer grip which is necessary for writing.'+
    'Language Development – Play with toddlers as they work on it,they can use lots of great vocabulary such as: tall/er, short/er, wide/r, thin/ner, helps to develop language skills.',
    ['/assets/img/Montessori Wooden Knob Cylinders1.jpg',    
    '/assets/img/Montessori Wooden Knob Cylinders2.jpg',
    '/assets/img/Montessori Wooden Knob Cylinders3.jpg',
    '/assets/img/Montessori Wooden Knob Cylinders4.jpg',
    '/assets/img/Montessori Wooden Knob Cylinders5.jpg'],5
    ),
    new Product('Pop it fidget square dice game','1236','₹756','✅LIGHTWEIGHT AND EASY TO CARRY – There are hundreds of computer games that can stimulate play, but you must agree that this is not the same thing as playing with friends at your table. This toy is light in weight, can be carried with you, you can play by yourself or with other partners. So, enjoy this jumbo size fidget chess board with 2 pieces of dice. A practical, fun game for a joyful parent-child time. Giving you hours and hours of fun.'+
    '✅SMART TIP FOR PARENTS – Looking for something unique? Search no more because this educational giant board game is amazing and novel for sensory stimulation. It can help kids to concentrate and improve their logical thinking skills through entertainment. Unlike traditional toys for girls and boys, our large colourful push pop sensory toy triggers kids’ creativity and improves mathematical skills like chess checkers or ludo.'+
    '✅ SIMPLE AND EASY TO PLAY – Players need to press any number of rows in turn. The player who pushes the last mouse loses. It can exercise children’s hands and mind, which is very interesting and can inspire children. This big dimple poppet fidget featuring bright colors and cute sounds is sure to please your little one and yourself. Just press the pop bubbles down as they make a slight popping sound. Flip it over and start again.'+
    '✅ COMPLETELY SAFE AND DURABLE POP PUSH – Investing in a child-friendly bubble fidget toy that is safe from harmful chemicals is our main concern. That is why we have created this fantastic trendy massive pop it fidget toy ludo board game made of strong, BPA-free, nontoxic, and environmentally friendly silicone designed to ensure the safety of your family while having long-lasting durability.'+
    '✅ SOOTHE YOUR NERVES AND KEEP CALM – Want to see all the stress going away? If you haven’t tried using an autism fidget toy to calm your senses, now is the time. Endlessly reusable and washable, ideal for boredom when you’re home alone or simply passing the time and helping children calm down when dealing with anger or frustration, antistress and antianxiety experience provide you with immediate stress relief. How cool is that, right?',
    ['/assets/img/Pop it fidget square dice game1.jpg',    
    '/assets/img/Pop it fidget square dice game2.jpg',
    '/assets/img/Pop it fidget square dice game3.jpg'],3
    ),
    new Product('Bubble camera','1237','₹757','Works with 3AA battery'+

    'Comes with bubble liquid    ',
    ['/assets/img/Bubble camera1.jpg',    
    '/assets/img/Bubble camera2.jpg',
    '/assets/img/Bubble camera3.jpg',
    '/assets/img/Bubble camera4.jpg',
    '/assets/img/Bubble camera5.jpg'],5
    ),
    new Product('Wooden play set with a truck and four mini cars','1238','₹758','This wooden play-set is crafted in the image of a double-decker car mover. It is crafted in high-quality wood. This wood is durable and painted in bright colors to excite the child’s imagination. The paint is, of course, non-toxic.'+
    'The set comes with one truck and four cars so that the child can play with a realistic toy. This toy will help with motor skills as well as creativity. It is also a great toy to build a stronger relationship between parent and child as they play creatively for hours.'+
    'The truck is easy to load and move smoothly across the floors. This is a great toy for any child and will be a hit as a gift under the tree or for a third birthday.'+
    'Age: 3 +'+
    'Includes: Truck (x1), cars (x4)'+
    'Features:'+
    '– Material: Wood.'+
    '– Size: About 32 x 13 x 7cm.'+
    '– Wooden play set with a truck and four mini cars.'+
    '– Easy-load and lower ramps provide two levels for the vehicles.'+
    '– Made by high quality wood material, safe and durable for playing.'+
    '– Encourages motor skills and imaginative play.'+
    '– A great gift for kids.'+
   ' Note- Colours will be sent According to Availability',
    ['/assets/img/Wooden play set with a truck and four mini cars1.jpg',    
    '/assets/img/Wooden play set with a truck and four mini cars2.jpg',
    '/assets/img/Wooden play set with a truck and four mini cars3.jpg',
    '/assets/img/Wooden play set with a truck and four mini cars4.jpg'],4
    )
  ];

  private selectedProducts : Product[] = [];
  
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

  addToCart(product : Product){
    console.log("added to cart service" + "  " + product);
    this.selectedProducts.push(product);
    this.productSelected.next(this.selectedProducts.slice());
    console.log(this.selectedProducts);
  }

  removeFromCart(index : number){
    this.selectedProducts.splice(index,1);
    this.productSelected.next(this.selectedProducts.slice());
  }

  getCartItems(){
    return this.selectedProducts;
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
