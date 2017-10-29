import { RegisterService } from './../../services/register.service';
import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  email : string;
  password : string;
  firstname : string;
  lastname : string;
  telphone : number;
  username : string;

  constructor(public registerService: RegisterService) { }

  signup() {
    console.log("email: " + this.email + " password: " + this.password);
    this.registerService.register(this.email, this.password, 
      this.firstname, this.lastname, this.telphone, this.username);
    this.email = this.password = '';
  }
}
