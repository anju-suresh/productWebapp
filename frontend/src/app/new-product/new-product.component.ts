import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { productModel } from '../product-list/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  titlehead:String="Product Management"
  title:string = "Add Product";
  constructor(private productService: ProductService,private router: Router, private fb: FormBuilder) { }

  productForm = this.fb.group({
    
    id:['',[Validators.required, Validators.pattern("[0-9]*")]],
    name:['',[Validators.required, Validators.pattern("[a-zA-Z ]*")]],
    code:['',[Validators.required, Validators.pattern("[a-zA-Z0-9 ]*")]],
    date:['',[Validators.required]],
    description:['',[Validators.required, Validators.pattern("[a-zA-Z0-9 ]*")]],
    price:['',[Validators.required, Validators.pattern("[0-9]*")]],
    rating:['',[Validators.required, Validators.pattern("[0-5]+\.[0-9]*")]],
    image:['',[Validators.required]]
  })
  productItem= new productModel(null,null,null,null,null,null,null,null)
  ngOnInit(): void {
  }
  AddProduct(){
    if (window.confirm("Are you sure you want to add a new product?")){
    this.productService.newProduct(this.productItem);
    console.log(this.productItem)
    console.log("called");
    alert('Success');
    this.router.navigate(['/products']);
    }else{
      this.router.navigate(['/products']);
    }
  }
  Clear(){
    this.router.navigate(['/products']);
  }
}
