import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './productList/productList.component';
import { ProductItemComponent } from './productList/productItem/productItem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './shared/product.service';
import { ProductDetailsComponent } from './productList/productDetails/productDetails.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProductNewComponent } from './productList/productNew/productNew.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductNewComponent,
    FooterComponent,
    AuthComponent,
    CartComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
