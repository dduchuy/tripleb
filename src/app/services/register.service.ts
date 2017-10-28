import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class RegisterService {
  private userInfo = firebase.auth().currentUser;
  
  constructor(private firebaseAuth: AngularFireAuth) {

   }

  signUpWithEmail(email: string, password: string, firstname: string, 
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
      })
      .catch(err => {
        //alert('Invalid Email');
        console.log('Something went wrong:', err.message);
      });
  }
}
