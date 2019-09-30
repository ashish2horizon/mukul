import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  cartValue = new Subject();
  emitter = this.cartValue.asObservable();
  verify(){
    return this.http.get('http://localhost:5000/admin/verify', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  adminLogin(email,password){
    const body={
      email:email,
      password : password
    }
    return this.http.post('http://localhost:5000/admin/adminLogin', body,{
      observe:'body'
    });
  }
  bookDetail(data : any) {
    this.cartValue.next(data);
 }

 getUserCart(){
  return  this.http.get('http://localhost:5000/carts/cart', {
    observe: 'body',
    params: new HttpParams().append('token', localStorage.getItem('token'))
  });
 }

  bookData : any;
  fetchGoogleBook(bookname){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+bookname);
  } 

  addbook(bookdetails){
    const body={
      book:bookdetails,
      token:localStorage.getItem('token')
    }
    return this.http.post('http://localhost:5000/books/addbook', body,{
      observe:'body'
    });
  }
  entireData(){
    return  this.http.get('http://localhost:5000/books/bookslist', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  delete(bookId:string){
    
    const body={
      id:bookId,
      token:localStorage.getItem('token')
    }
    return this.http.post('http://localhost:5000/books/delete', body , {
      observe:'body'
    });
  }
}
