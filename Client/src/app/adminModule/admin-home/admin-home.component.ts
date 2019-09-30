import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router , private adminService : AdminServiceService) { 
      this.adminService.verify()
      .subscribe(
        data => "",
        error=> this.router.navigate(['/signin'])
      )
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
