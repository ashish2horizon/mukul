import { Router } from '@angular/router';
import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  defaultQuestion:String='2';
  bookChange: boolean=true;
  APIbooks : any[];
  isBookPresent : boolean=false;
  isImage : boolean = false;
  image:string="";
  isShow:boolean=false;
  constructor(private adminService:AdminServiceService , private router : Router) { }

  ngOnInit() {
  }
  
  selectOption(event){
    this.bookChange=!this.bookChange;
  }

  search(bookname:String){
    if(bookname==="")
      return 
    this.adminService.fetchGoogleBook(bookname)
    .subscribe(
      (data:any) => {
        this.APIbooks = data.items;
        this.isBookPresent= true },
      error => { 
        console.log("hello Errorr ", error)
       
      }
    );
    
  }

  show(index:number){
    this.adminService.bookData=this.APIbooks[index];
    this.router.navigate(['/admin/addbookform'])
  }
}
