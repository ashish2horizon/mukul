import { Router } from '@angular/router';
import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetail ;
  constructor(
   private myService : MyServiceService ,
   private router : Router
  ) { 
    myService.getDetails()
    .subscribe(
      data => {console.log("user details",data);
      this.userDetail=data},
      error => router.navigate(['/signin'])
    )
  }

  ngOnInit() {
  }

}
