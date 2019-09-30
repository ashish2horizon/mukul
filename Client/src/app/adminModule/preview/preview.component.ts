import { ActivatedRoute ,Router } from '@angular/router';
import { AdminServiceService } from './../../shareModule/sevice/admin/admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  book;
  flag1     :boolean = false;
  flag      :boolean = false;
  message   :string  = "read more";
  id        :string  = ''
  category  :string  = ""
  constructor(
    private adminService     : AdminServiceService ,
    private activateRoute    : ActivatedRoute,
    private router           : Router,
    
  ) { }

  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    
    this.adminService.entireData().subscribe((data) => {
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
        else if(this.book.category=="7")
          this.category = "Textbook";
        else if(this.book.category=="8")
          this.category = "Biography";
        else
          this.category = "Others";
        this.flag1=true;
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
  delete(id:string){
  
    this.adminService.delete(id)
    .subscribe(
      (data:{message: string}) =>  {
        alert("Book is deleted from database")
        this.router.navigate(['/admin/allbooks'])
        },
      error => {
        alert("Token expair Please login again ")
        //  this.router.navigate(['/signin'])
        }
    );
  }
}
