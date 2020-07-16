import { Component, OnInit } from '@angular/core';
import {productModel} from './product.model';
import { Router } from '@angular/router';
import {ProductService} from '../product.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String ="Product List";
  products:productModel[];
  imageWidth: number =50;
  imageMargin: number = 2;
  showImage : boolean =false;
  constructor(private ProductService: ProductService,
    private router: Router) { }
  toggleImage(): void{
    this.showImage=!this.showImage;
  }
  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((date)=>{
      this.products=JSON.parse(JSON.stringify(date));
    })
  }
  deleteProduct(event){
    if (window.confirm("Do you want to delete?")){
    this.ProductService.deleteProduct(event).subscribe((data) => {
    this.products = JSON.parse(JSON.stringify(data));})
    alert('Deleted');
    }else{
      this.router.navigate(['/']);
    }
    
  }
}
