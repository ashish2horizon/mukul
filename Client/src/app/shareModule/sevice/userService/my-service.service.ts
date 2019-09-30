import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }
  
  cartValue = new Subject();
  emitter = this.cartValue.asObservable();

  booksData:any=[];
  numberOfIteminCart:number=0;
  cartIncrease(data : number) {
    this.cartValue.next(data);
 }
 
  submitRegister(userData:any){
    return this.http.post('http://localhost:5000/users/register', userData,{
      observe:'body'
    });
  }

  login(email,password){
    const body={
      email:email,
      password : password
    }
    return this.http.post('http://localhost:5000/users/login', body,{
      observe:'body'
    });
  }

  loginWithGoogle(email:string,name:string){
    const body={
      email:email,
      name : name
    }
    return this.http.post('http://localhost:5000/users/loginwithgoogle', body,{
      observe:'body'
    });
}
  inCart(id){
    const body={
      id:id,
      token:localStorage.getItem('token')
    }
      return this.http.post('http://localhost:5000/carts/inCart',body , {
        observe:'body'
      });
    }
  
  getDetails() {
    return this.http.get('http://localhost:5000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  entireData () {
    return  this.http.get('http://localhost:5000/books/bookslistUser', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    }
  );
  }
  
 
  addToCartService(book){
    const body={
      book:book,
      token:localStorage.getItem('token')
    }
   
    return this.http.post('http://localhost:5000/carts/addtocart', body , {
      observe:'body'
    });
  }
  cartItem(){
    return this.http.get('http://localhost:5000/carts/cartItem', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
 return(id){
   
  const body={
    id:id,
    token:localStorage.getItem('token')
  }
    return this.http.post('http://localhost:5000/carts/return',body , {
      observe:'body'
    });
  }
}
