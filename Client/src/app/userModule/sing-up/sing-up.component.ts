import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  @ViewChild('data') signupForm :NgForm
  successMessage='';
  defaultQuestion:String='1';
  genders=['Male','Female'];
  
  user={
    name:'',
    email:'',
    password:'',
    gender:'',
    secretQuestion:'',
    answer:''
  }
  constructor(private router : Router , private myService : MyServiceService  ) {
   
   }
  
  ngOnInit() {
  }
  flag:boolean=false;
  
  onSubmit(){
    this.user.name=this.signupForm.value.name;
    this.user.email=this.signupForm.value.email.toLowerCase();
    this.user.password=this.signupForm.value.password;
    this.user.gender=this.signupForm.value.gender;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.answer;
  
 
    this.myService.submitRegister(this.user)
    .subscribe(
      (data:{message: string}) =>  this.successMessage = data.message ,
      error => this.successMessage = "Some Error Occurs" 
    );
  }
  
}


