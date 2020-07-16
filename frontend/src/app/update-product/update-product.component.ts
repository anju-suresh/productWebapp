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
  title:string = "Edit Product";
  constructor(private productService: ProductService,private router: Router,private _route:ActivatedRoute) {
    // const navigation = this.router.getCurrentNavigation();
    // const state = navigation.extras.state as{
    // productId : Number,
    // productName : String,
    // productCode : String,
    // releaseDate : String,
    // description : String,
    // price : Number,
    // starRating : Number,
    // imageUrl : String
    // };
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
  // update(event){
  //   this.productService.update(event);
  //   console.log(this.productItem)
  //   console.log("called");
  //   alert('Success');
  //   this.router.navigate(['/update']);
  // }
  update(){
    if (window.confirm("Do you want to update this product?")){
    this.productService.update(this.productItem);
    console.log(this.productItem)
    console.log("called");
    alert('Updated Successfuly');
    this.router.navigate(['/']);
    }else{
      this.router.navigate(['/']);
    }
  }
  Clear(){
    this.router.navigate(['/']);
  }

}
