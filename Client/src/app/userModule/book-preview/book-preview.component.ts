import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {

  book;
  flag1     :boolean = false;
  flag      :boolean = false;
  message   :string  = "read more";
  id        :string  = '';
  category  :string = '';
  isIssued  :boolean=false ;
  constructor(
    private adminService     : AdminServiceService ,
    private myService        : MyServiceService ,
    private activateRoute    : ActivatedRoute,
    private router           : Router,
    
  ) {
    this.id=this.activateRoute.snapshot.params['id'];
    myService.inCart(this.id)
    .subscribe(
      (data:any) =>{
        if(data.length==0)
          this.isIssued=false;
        else 
          this.isIssued=true;
      },
      error =>{
        alert("Token expair Please login again ")
        this.router.navigate(['/signin'])
        }
    )
    
   }

  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    
    this.myService.entireData().subscribe((data) => {
        this.book = data;
        this.book=this.book.find(x => x.id === this.id);
       
        if(this.book.category=="1")
          this.category = "Fiction";
        else if(this.book.category=="2")
          this.category = "Action";
        else if(this.book.category=="3")
          this.category = "Horror";
        else if(this.book.category=="4")
          this.category = "Comics";
        else if(this.book.category=="5")
          this.category = "Romance";
        else if(this.book.category=="6")
          this.category = "Adventure";
        else if(this.book.category=="7"){
          this.category = "Textbook";
          
        }
          
        else if(this.book.category=="8")
          this.category = "Biography";
        else
          this.category = "Others";
        this.flag1=true;
        
    });
  }

  changeFlag(){
    if(this.flag){
        this.flag = false;
        this.message="read more"
    }else{
        this.flag=true;
        this.message="read less"
    }
  }
  // delete(id:string){
   
  //   this.adminService.delete(id)
  //   .subscribe(
  //     (data:{message: string}) =>  {
  //       alert("Book is deleted from database")
  //       this.router.navigate(['/admin/allbooks'])
  //       },
  //     error => {
  //       alert("Token expair Please login again ")
  //       this.router.navigate(['/signin'])
  //       }
  //   );
  // }
  addToCart(){
    this.myService.addToCartService(this.book)
    .subscribe(
      data=>{ 
        if(data){  
            this.myService.cartIncrease(this.myService.numberOfIteminCart + 1)
            this.router.navigate(['/library/cart'])
        }
      },
      error=>{this.router.navigate(['/signin'])}
    )
  }
  return(id){
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
            let array:any=[];
            array=data;
            this.myService.cartIncrease(array.length)
            this.router.navigate(['/library'])
         })
      },
      error=>this.router.navigate(['/signin']),
      )
  }
  renew(){
    alert("Your Book is renewed for next 15 days")
  }
}
