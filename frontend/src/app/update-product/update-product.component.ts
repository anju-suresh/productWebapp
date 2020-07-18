import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { productModel } from '../product-list/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  titlehead:String="Product Management"
  title:string = "Edit Product";
  constructor(private productService: ProductService,private router: Router,private _route:ActivatedRoute) {
   }
   pid="";
  productItem= new productModel(null,null,null,null,null,null,null,null)
  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.pid = params['pid']
    });
    console.log("id"+ this.pid);
    this.productService.updateProduct(this.pid).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
    });
  }

  update(){
    if (window.confirm("Do you want to update this product?")){
    this.productService.update(this.productItem);
    console.log(this.productItem)
    console.log("called");
    alert('Updated Successfuly');
    this.router.navigate(['/products']);
    }else{
      this.router.navigate(['/products']);
    }
  }
  Clear(){
    this.router.navigate(['/products']);
  }

}
