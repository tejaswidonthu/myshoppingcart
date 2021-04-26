import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productItem.component.html',
  styleUrls: ['./productItem.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product;
  @Input() index : number;
  constructor() { }

  ngOnInit(): void {
  }

}
