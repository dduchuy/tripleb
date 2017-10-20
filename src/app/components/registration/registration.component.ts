import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    console.log("email: " + this.email + " password: " + this.password);
    this.authService.signUpWithEmail(this.email, this.password);
    this.email = this.password = '';
  }
}
