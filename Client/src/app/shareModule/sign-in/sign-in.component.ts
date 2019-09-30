import { AdminServiceService } from './../sevice/admin/admin-service.service';
import { MyServiceService } from './../sevice/userService/my-service.service';


import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(private myService : MyServiceService ,
    private socialAuthService: AuthService ,
    private adminService:AdminServiceService,private router : Router ) {}

  ngOnInit() {
  }
  flag:boolean=false;
  message:String=""
  login(email:String,password:String){
      if(email===''|| password===''){
            this.message="Please Fill all the input Box"
            return;
      }
      else{
        if(email==="admin" && password==="admin"){
            this.adminService.adminLogin(email,password)
            .subscribe(
                data => {
             
                  localStorage.setItem('token', data.toString());
                  this.router.navigate(['/admin']);
                },
                error => { 
                
                  this.message=error.error.message
                }
            );  }
            else
                this.myService.login(email.toLowerCase(),password)
                  .subscribe(
                      data => {
                   
                        localStorage.setItem('token', data.toString());
                        this.router.navigate(['/library']);
                      },
                      error => { 
                      
                        this.message=error.error.message
                      }
                  );
      }
  }
  googleLogin(data:string){
    if(data == "google"){
      let socialPlatformProvider;
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          
           this.myService.loginWithGoogle(userData.email , userData.name)
           .subscribe(
            data => {
         
              localStorage.setItem('token', data.toString());
              this.router.navigate(['/library']);
            },
            error => { 
              this.message=error.error.message
            }
        );
              
        }
      );
    }
}
}
