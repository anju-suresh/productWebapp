import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../product.service'
import {userModel} from "../register/register.module"
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title:string="Sign Up";
  // user={};
  constructor(private router: Router,private productService: ProductService,private fb: FormBuilder) { }

  registerForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })
  user= new userModel(null,null,null)
  ngOnInit(): void {
  }
  
  registerUser(){
    
    this.productService.newUser(this.user);
    console.log(this.user);
    alert('Registered Successfully');
    this.router.navigate(['/login']);
  }
  Clear(){
    this.router.navigate(['/login']);
  }
}
