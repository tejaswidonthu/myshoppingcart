import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-productnew',
  templateUrl: './productNew.component.html',
  styleUrls: ['./productNew.component.css']
})
export class ProductNewComponent implements OnInit {
    id: number;
    isImageUploaded = false;
    newProductForm: FormGroup;
    imagePath : string;
    constructor() { }
  
    ngOnInit() {
        this.initForm();
    }
  
    onSubmit() {
    //   const newRecipe = new Recipe(
    //     this.recipeForm.value['name'], this.recipeForm.value['description'],
    //     this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']
     // )
     
    }
  
    private initForm() {
      let productName = '';
      let productType = '';
      let productId = '';
      let price = '';
      let description = '';
      let stock = '';
  
       
      this.newProductForm = new FormGroup({
        'name': new FormControl(productName, Validators.required),
        'type': new FormControl(productType, Validators.required),
        'productId': new FormControl(productId, Validators.required),
        'price': new FormControl(price, Validators.required),
        'description': new FormControl(description, Validators.required),
        'stock': new FormControl(stock, Validators.required),
        imagePath: new FormControl('', [Validators.required])
      })
    }   

    // onFileSelected(event){
    //     this.imagePath = event.target.files[0];
    //     console.log(event.target.files[0]);
    // }

   
   
     
   get uf(){
     return this.newProductForm.controls;
   }
    
   onImageChange(e) {
     const reader = new FileReader();
     
     if(e.target.files && e.target.files.length) {   
        this.isImageUploaded = true;
        console.log(e.target.files);  
       // for(let i=0;i<=e.target.files.length;i++){ 
       reader.readAsDataURL( e.target.files[0]);
     
       reader.onload = () => {
        console.log(reader.result as string); 
         this.imagePath =reader.result as string;
         this.newProductForm.patchValue({
           imgSrc: reader.result
         });
    
       };
      }
     }
       
      upload(){
        console.log(this.newProductForm.value);
        // this.httpClient.post('http://localhost:8888/file-upload.php', this.newProductForm.value)
        //   .subscribe(response => {
        //     alert('Image has been uploaded.');
        //   })
      }
}
