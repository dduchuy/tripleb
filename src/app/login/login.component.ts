import { Component, OnInit, HostBinding } from '@angular/core';

import { AuthService } from '../auth.service';


import { AngularFireDatabase, FirebaseListObservable, } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signUpWithEmail(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.loginWithEmail(this.email, this.password);
    this.email = this.password = '';    
  }
  
  loginWithGoogle(){
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();  
  }
}
