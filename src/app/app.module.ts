import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// web component
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserComponent } from './components/user/user.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ContactComponent } from './components/contact/contact.component';
import { ResetpwordComponent } from './components/resetpword/resetpword.component';

// services
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global.service';
import { ItemService } from './services/item.service';
import { ItemlistComponent } from './components/itemlist/itemlist.component';

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
    ContactComponent,
    ResetpwordComponent,
    HomeComponent,
    ItemlistComponent
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
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home', 
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ItemlistComponent,
          }
        ]
      },
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
      },
      {
        path: 'resetPassword',
        component: ResetpwordComponent
      }
    ])
  ],
  providers: [AuthService, GlobalService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
