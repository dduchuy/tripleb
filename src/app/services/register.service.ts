import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class RegisterService {
  private userInfo = firebase.auth().currentUser;
  
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {

   }

  register(email: string, password: string, firstname: string, 
    lastname: string, phone:number, username: string){
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then( value => {
        console.log('Success!', value);
        firebase.database().ref('users/' + value.uid).set({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        username: username
        });
        firebase.database().ref('usernames/' + value.uid).set({
          email: email,
          username: username,
          uid: value.uid
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        //alert('Invalid Email');
        console.log('Something went wrong:', err.message);
      });
  }
}
