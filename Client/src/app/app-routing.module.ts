import { UserListComponent } from './adminModule/user-list/user-list.component';
import { UserDetailsComponent } from './userModule/user-details/user-details.component';
import { SearchResultComponent } from './userModule/search-result/search-result.component';
import { IssuedBookComponent } from './userModule/issued-book/issued-book.component';
import { BookPreviewComponent } from './userModule/book-preview/book-preview.component';
import { BooklistComponent } from './userModule/booklist/booklist.component';
import { HomeComponent } from './userModule/home/home.component';
import { SingUpComponent } from './userModule/sing-up/sing-up.component';

import { PreviewComponent } from './adminModule/preview/preview.component';
import { MyStoreComponent } from './adminModule/my-store/my-store.component';
import { FormComponent } from './adminModule/form/form.component';
import { ReactiveBookFormComponent } from './adminModule/reactive-book-form/reactive-book-form.component';

import { AddbookComponent } from './adminModule/addbook/addbook.component';
import { AdminHomeComponent } from './adminModule/admin-home/admin-home.component';
import { AdminPageComponent } from './adminModule/admin-page/admin-page.component';
import { LandingPageComponent } from './shareModule/landing-page/landing-page.component';
import { SignInComponent } from './shareModule/sign-in/sign-in.component';
import { PageNotfoundComponent } from './shareModule/page-notfound/page-notfound.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  {path : '' , component : LandingPageComponent},
  {path : 'signin' , component : SignInComponent},
  {path : 'signup' , component :SingUpComponent},
  {path : 'admin' , component :AdminHomeComponent,
    children:[
      {path:'' , component:AdminPageComponent },
      {path:'addbooks' , component:AddbookComponent },
      {path:'addbookform' , component:FormComponent },
      {path:'allbooks' , component:MyStoreComponent },
      {path:'preview/:id' , component:PreviewComponent },
      {path:'userDetails' , component:UserListComponent },   
  ]
},
{path : 'library' , component :HomeComponent,
    children:[
      {path:'' , component:BooklistComponent },
      {path:'preview/:id' , component:BookPreviewComponent },
      {path:'cart' , component:IssuedBookComponent },
      {path:'profile' , component:UserDetailsComponent }  
    ]
  },
{path:'search/:searchValue' , component:SearchResultComponent},
{path :'**', component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }