import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private userInfo = firebase.auth().currentUser;

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

  loginWithEmail(email:string, password: string){
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
    })
    .catch(err => {
      alert('Wrong Email or Password');
      console.log('Something went wrong:', err.message);
    });
  }

  loginWithGoogle(){
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  logout() {
    this.firebaseAuth.auth.signOut()
    .then((value) =>{
      alert('You have signed out');
      this.router.navigate(['/']);
    })
    .catch((err) =>{
      console.log(err);
    });

  }

  resetPassword(email: string){
    console.log("service: " + email);
    this.firebaseAuth.auth.sendPasswordResetEmail(email)
    .then(()=> {
      alert('email sent!');
      this.router.navigate(['/']);
      console.log('email sent');
    })
    .catch(err=> {
      console.log(err);
    });    
  }
}
