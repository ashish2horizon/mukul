import { Router } from '@angular/router';
import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';
import { Component, OnInit , ViewChild ,ChangeDetectorRef } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('data') bookAddForm :NgForm
  successMessage='';
  
  refresh: String ="" ;
  alert:string=""
  book={
    id:'',
    title:'',
    author:'',
    description:'',
    image:'',
    category:'',
    quantity:10,
    pageCount:0,
    avgRating:0,
    totalRater:0,
  }
  constructor(private adminService: AdminServiceService , private router:Router) {
    if(adminService.bookData){
      this.refresh = " Please Don't Refresh this page" ; 
      this.book.id        = adminService.bookData.id;
      this.book.title     = adminService.bookData.volumeInfo.title;

     
      if(adminService.bookData.volumeInfo.hasOwnProperty('authors'))
          this.book.author  = adminService.bookData.volumeInfo.authors;

      if(adminService.bookData.volumeInfo.hasOwnProperty('imageLinks'))
          this.book.image     = adminService.bookData.volumeInfo.imageLinks.thumbnail;

      this.book.description = adminService.bookData.volumeInfo.description;
      this.book.avgRating   = adminService.bookData.volumeInfo.averageRating;
      this.book.totalRater  = adminService.bookData.volumeInfo.ratingsCount;
      this.book.pageCount   = adminService.bookData.volumeInfo.pageCount;
    }
   }

    ngOnInit() {
        
    }
    
  
    onSubmit(){
         
           this.adminService.addbook(this.bookAddForm.value)
           .subscribe(
            (data:{message: string}) =>  {
              this.successMessage="Book Inserted in database" 
              this.adminService.bookData="";
            },
            error => {
              alert("Token expair Please login again ")
              this.router.navigate(['/signin'])}
          );
    }
}
