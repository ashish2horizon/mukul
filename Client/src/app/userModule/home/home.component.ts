import { Router } from '@angular/router';
import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemInCart:number=0;
  name : string= "";
  booksList:any="";
  constructor(private myService : MyServiceService , private router: Router ) { 
    this.myService.getDetails()
    .subscribe(
      (data:any) => {
      
          this.name=data.name;
          const promise2 = new Promise ((resolve , reject) => {
            this.myService.cartItem().subscribe((data) => {
                  if(data) {
                    resolve(data);
                  }
                  else {
                    reject();
                  }
                })
            })
            promise2.then((data) => {
              let array:any=[];
              array=data;
              let numberOfElements=array.length;
              this.myService.cartIncrease(numberOfElements);
            }) 
          },
      error => {
     
        this.router.navigate(['/signin'])
      }
    );
  }

  ngOnInit() {
      this.myService.emitter.subscribe((data :number) => {
      this.myService.numberOfIteminCart = data 
      this.itemInCart = this.myService.numberOfIteminCart;
    });
  }
  home(){
    this.router.navigate(['/library'])
  }
  cart(){
    this.router.navigate(['/library/cart'])
  }
  search(searchValue:string){
    if(searchValue.trim())
        this.router.navigate(['/search',searchValue]);
        
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }

  profile(){
    this.router.navigate(['/library/profile'])
   }

}
