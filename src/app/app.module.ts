import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ContactComponent } from './contact/contact.component';

// Initialize Firebase
var fireconfig = {
  apiKey: "AIzaSyDPWwg-ojIyxNoFWGcDELpyk0cxKSsX6tA",
  authDomain: "tribleb-d05e6.firebaseapp.com",
  databaseURL: "https://tribleb-d05e6.firebaseio.com",
  projectId: "tribleb-d05e6",
  storageBucket: "tribleb-d05e6.appspot.com",
  messagingSenderId: "484020753676"
};
  


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ErrorComponent,
    CartComponent,
    CheckoutComponent,
    UserComponent,
    SignupComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireconfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: 'login', 
        component: LoginComponent 
      },
      {
        path: 'register', 
        component: RegistrationComponent 
      },
      {
        path: 'checkout', 
        component: CheckoutComponent 
      },
      {
        path: 'cart', 
        component: CartComponent 
      },
      {
        path: 'error', 
        component: ErrorComponent 
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
