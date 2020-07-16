import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/product");
  }
  newProduct(item){
    console.log(item);
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteProduct(pid){
    console.log(pid)
    return this.http.get("http://localhost:3000/delete/"+pid)

  }
  update(pid){
      return this.http.post("http://localhost:3000/update",{"product":pid})
      .subscribe(data => {console.log("updateservice"+data)})
  }
    
  updateProduct(pid){
    console.log(pid)
    return this.http.get("http://localhost:3000/update/"+pid)
   
  }
  newUser(user){
    console.log(user)
    return this.http.post("http://localhost:3000/adduser",{"user":user})
    .subscribe(data => {console.log("userservice"+data)})
   
  }
  authUser(users){
    console.log(users)
    return this.http.post("http://localhost:3000/authuser",{"users":users})
    
   
  }
}
