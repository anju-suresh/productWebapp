import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {ProductService} from '../product.service'
import {authUserModel} from "../login/login.module"
import {HttpResponseBase } from '@angular/common/http'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title:string="Log In";
  
  constructor(private router: Router,private productService: ProductService, private fb: FormBuilder) { }
  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

  error=[];
  users= new authUserModel(null,null)
  ngOnInit(): void {
  }

  
  userlogin(){
    
    this.productService.authUser(this.users)
    .subscribe(
      res=> {
        console.log(res);
          if(res){
            alert('Logged In Successfully');
            this.router.navigate(['/']);
          }else 
          if(res){
            alert('Invalid Credentionals');
            // console.log(res);
          }
        }

      )
    console.log(this.users);
      
      
    
  }
  
}