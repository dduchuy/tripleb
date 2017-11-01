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
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  isEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // get email using username
  async getEmailByUsername(username: string, password: string) {
    console.log("calling getUsername: " + username);
    var ref = firebase.database().ref("usernames");
    let retEmail: string = "";
    await ref.once("value").then(function (snapshot) {
      snapshot.forEach(function (userSnapshot) {
        var username2 = userSnapshot.val();
        if (username2.username === username) {
          retEmail = username2.email;       
        }
      })
    })
    return retEmail;
  }

  isLoggedIn() {
    if (this.userDetails == null) 
      return false;
   
    return true;
  }

  async loginWithEmail(email: string, password: string) {

    // passing username to get the email information
    if (!this.isEmail(email)) {
      email = await this.getEmailByUsername(email, password);
    }
    
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

  login(email: string, password: string) {

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

  loginWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((value) => {
        alert('You have signed out');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  resetPassword(email: string) {
    this.firebaseAuth.auth.sendPasswordResetEmail(email)
      .then(() => {
        alert('email sent!');
        this.router.navigate(['/']);
        console.log('email sent');
      })
      .catch(err => {
        console.log(err);
      });
  }
}