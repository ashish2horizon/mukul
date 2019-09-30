import {ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from './../../shareModule/sevice/userService/my-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  booksList ;

  data = [
      { label: 'Fiction', checked: false , category:'' },
      { label: 'Action', checked: false , category:'' },
      { label: 'Horror', checked: false , category:''  },
      { label: 'Comics', checked: false , category:'' },
      { label: 'Romance', checked: false ,category:'' },
      { label: 'Adventure', checked: false, category:''  },
      { label: 'Textbook', checked: false , category:'' },
      { label: 'Biography', checked: false , category:''  },
      { label: 'Others', checked: false  , category:'' }
    ];
  flag: boolean = false;
  constructor(private myService: MyServiceService ,private router:Router , urlLink: ActivatedRoute ) {
    this.flag = true;
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
     promise.then((data) => {
        this.flag = false;
        this.booksList = data;
     })
   }
  ngOnInit() {
    
  }
  onChange(event, index, item) {
    
          let category = index + 1 ;
          item.checked = !item.checked;
          if(item.checked)
            this.data[index].category = category+""
          else
            this.data[index].category ="";
         
          if(
            this.data[0].category!=="" || 
            this.data[1].category!=="" ||
            this.data[2].category!=="" ||
            this.data[3].category!=="" ||
            this.data[4].category!=="" ||
            this.data[5].category!=="" ||
            this.data[6].category!=="" ||
            this.data[7].category!=="" ||
            this.data[8].category!=="" 
          )
            {
               
              const promise1 = new Promise ((resolve , reject) => {
                 this.myService.entireData().subscribe((data) => {
                   if(data) {
                     resolve(data);
                   }
                   else {
                     reject();
                   }
                 })
              })
              promise1.then((data) => {
                 
                this.booksList = data;
                
                let newBook=[]
                
                this.booksList.filter(val => {
                    if(
                        this.data[0].category==val.category || 
                        this.data[1].category==val.category ||
                        this.data[2].category==val.category || 
                        this.data[3].category==val.category ||
                        this.data[4].category==val.category || 
                        this.data[5].category==val.category ||
                        this.data[6].category==val.category || 
                        this.data[7].category==val.category ||
                        this.data[8].category==val.category 
                    )
                        {
                          newBook.push(val)
                        } 
                  
                  this.booksList=newBook
                  });
               
              })
            }
            
                
            else{
              this.flag = true;
              const promise2 = new Promise ((resolve , reject) => {
                  this.myService.entireData().subscribe((data) => {
                    if(data) {
                      resolve(data);
                    }
                    else {
                      reject();
                    }
                  })
              })
              promise2.then((data) => {
                  this.flag = false;
                  this.booksList = data;
              })
            }
      }

  oneBook(id : string){
   
    this.router.navigate(['library/preview', id])
  }

}
