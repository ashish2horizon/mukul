import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators } from '@angular/forms'
@Component({
  selector: 'app-reactive-book-form',
  templateUrl: './reactive-book-form.component.html',
  styleUrls: ['./reactive-book-form.component.scss']
})
export class ReactiveBookFormComponent implements OnInit {

  bookAddForm : FormGroup;
  constructor(private adminService:AdminServiceService) { }

  ngOnInit() {

    this.adminService.emitter.subscribe((data :number) => {});
    this.bookAddForm = new FormGroup({
      'title' : new FormControl('Vikash'),
      'email' : new FormControl(null , Validators.required)
    })
      
  }
  onSubmit(){
   
  }
}
