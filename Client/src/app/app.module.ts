import { ReactiveBookFormComponent } from './adminModule/reactive-book-form/reactive-book-form.component';
import { AdminServiceService } from './shareModule/sevice/admin/admin-service.service';
import { MyServiceService } from './shareModule/sevice/userService/my-service.service';
import { MaterialModule } from './angular-material';
import { PageNotfoundComponent } from './shareModule/page-notfound/page-notfound.component';
import { SignInComponent } from './shareModule/sign-in/sign-in.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './shareModule/landing-page/landing-page.component';
// import { HomePageComponent } from './shareModule/home-page/home-page.component';
import { AdminPageComponent } from './adminModule/admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './adminModule/admin-home/admin-home.component';
import {MatProgressBarModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ChildComponent } from './adminModule/child/child.component';
import { FooterComponent } from './shareModule/footer/footer.component';
import { AddbookComponent } from './adminModule/addbook/addbook.component';
import { PipePipe } from './shareModule/pipe/pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './adminModule/form/form.component';
import { MyStoreComponent } from './adminModule/my-store/my-store.component';
import { PreviewComponent } from './adminModule/preview/preview.component';
import { SingUpComponent } from './userModule/sing-up/sing-up.component';
import { HomeComponent } from './userModule/home/home.component';
import { BooklistComponent } from './userModule/booklist/booklist.component';
import { BookPreviewComponent } from './userModule/book-preview/book-preview.component';
import { IssuedBookComponent } from './userModule/issued-book/issued-book.component';
import { SearchResultComponent } from './userModule/search-result/search-result.component';
import { UserDetailsComponent } from './userModule/user-details/user-details.component';
import { UserListComponent } from './adminModule/user-list/user-list.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";


// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("343997037151-u7e8l497koitbsofjcirmgc8b465co40.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignInComponent,
    PageNotfoundComponent,
   
    AdminPageComponent,
    AdminHomeComponent,
    ReactiveBookFormComponent,
    ChildComponent,
    FooterComponent,
    AddbookComponent,
    PipePipe,
    FormComponent,
    MyStoreComponent,
    PreviewComponent,

    SingUpComponent,

    HomeComponent,

    BooklistComponent,

    BookPreviewComponent,

    IssuedBookComponent,

    SearchResultComponent,

    UserDetailsComponent,

    UserListComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCheckboxModule ,
    MaterialModule,
    SocialLoginModule
  ],
  providers: [MyServiceService,AdminServiceService, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
