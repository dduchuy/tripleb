import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if(user){
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else{
          this.userDetails = null;
        }
      }
    );
  }
  
  isLoggedIn(){
    if(this.userDetails == null){
      return false;
    }
    else{
      return true;
    }
  }

  signUpWithEmail(email: string, password: string){
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then( value => {
        console.log('Success!', value);
      })
      .catch(err => {
        alert('Invalid Email');
        console.log('Something went wrong:', err.message);
      })
  }

  loginWithEmail(email:string, password: string){
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
    })
    .catch(err => {
      alert('Wrong Email or Password');
      console.log('Something went wrong:',err.message);
    });
  }

  loginWithGoogle(){
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  logout() {
    // need to implmeneted check to see if it signs out then 
    // go to home page
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/']);  // go back to home page
  }

  resetPassword(email: string){
    console.log("service: " + email);
    this.firebaseAuth.auth.sendPasswordResetEmail(email)
    .then(()=> {
      console.log('email sent');
    })
    .catch(err=> {
      console.log(err);
    });    
  }
}
