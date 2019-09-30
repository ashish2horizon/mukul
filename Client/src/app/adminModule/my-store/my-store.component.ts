import { Router } from '@angular/router';
import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.scss']
})
export class MyStoreComponent implements OnInit {

  booksList ;
  flag: boolean = false;
  constructor(private adminService: AdminServiceService,private router:Router ) {
    this.flag = true;
     const promise = new Promise ((resolve , reject) => {
        this.adminService.entireData().subscribe((data) => {
          if(data) {
            resolve(data);
          }
          else {
            reject();
          }
        })
     })
     promise.then((data) => {
        this.flag = false;
        
        this.booksList = data;
       
     })
   }

  ngOnInit() {
      
  }
  
  oneBook(id : String){
    this.router.navigate(['admin/preview', id])
  }
}


