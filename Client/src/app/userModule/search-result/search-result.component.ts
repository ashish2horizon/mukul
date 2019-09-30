import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  id        :string = "";
  flag      :boolean = false;
  booksList ;
  noBookFound:boolean=false;
  constructor(
    private myService        : MyServiceService ,
    private activateRoute    : ActivatedRoute,
    private router           : Router,
  ) { 
    this.id=this.activateRoute.snapshot.params['searchValue'];
    this.id=this.id.toLowerCase()
 
    var regex=RegExp(this.id)
    this.flag = true
    const promise = new Promise ((resolve , reject) => {
       this.myService.entireData().subscribe((data) => {
         if(data) {
           resolve(data);
         }
         else {
           reject();
         }
       })
    })
    promise.then(
      (data) => {
       this.booksList = data;

       let newBook=[]
       
       this.booksList.filter(val => {
          let x=val.title.toLowerCase()
           if(x.match(regex))
                 newBook.push(val)
            this.booksList=newBook
            if(newBook.length==0)
              this.noBookFound=true;
            this.flag = false
   
        });
       
    })
  }
  

  ngOnInit() {
  }
  oneBook(id : string){
   
    this.router.navigate(['library/preview', id])
  }
  home(){
    this.router.navigate(['/library']);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
