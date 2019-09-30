import { Router } from '@angular/router';
import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issued-book',
  templateUrl: './issued-book.component.html',
  styleUrls: ['./issued-book.component.scss']
})
export class IssuedBookComponent implements OnInit {

  cartBook:any=[];
  flag1:boolean=false;
  totalPrice:number=0;
  cartItem:boolean=false;
  constructor(private myService:MyServiceService, 
  private router:Router) {
    const promise = new Promise ((resolve , reject) => {
      this.myService.cartItem().subscribe((data) => {
        if(data) {
          resolve(data);
        }
        else {
          reject();
        }
      })
    })
    promise.then((data) => {
      this.cartBook=data;
      this.flag1=true;
      let array:any=[];
      array=data;
      if(array.length>0)
        this.cartItem=true;
       
   })
  
   }

  ngOnInit() {
}
home(){
  this.router.navigate(['/library'])
}
return(id){
  this.flag1=false;
  this.myService.return(id)
  .subscribe(
    (data)=>{
        alert("Book has retured");
        const promise = new Promise ((resolve , reject) => {
          this.myService.cartItem().subscribe((data) => {
            if(data) {
              resolve(data);
            }
            else {
              reject();
            }
          })
        })
        promise.then((data) => {
          this.cartBook=data;
          this.flag1=true;
          let array:any=[];
          array=data;
          if(array.length>0)
            this.cartItem=true;
          else
            this.cartItem=false;
          this.myService.cartIncrease(array.length)
           
       })
    },
    error=>this.router.navigate(['/signin']),
    )
  }
  
  renew(){
    alert("Your Book is renewed for next 15 days");
  }
}
