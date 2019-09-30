import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';
import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  cart;
  constructor(private adminService :AdminServiceService) { 
    this.adminService.getUserCart()
    .subscribe (
      (data:any) =>{
                this.cart = data ; 
                console.log("data  ",data)},
      error => {console.log("error ",error)}
    )
  }

  ngOnInit() {
  }

}
