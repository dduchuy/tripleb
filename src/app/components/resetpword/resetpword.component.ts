import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-resetpword',
  templateUrl: './resetpword.component.html',
  styleUrls: ['./resetpword.component.css']
})
export class ResetpwordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  reset(email: string){
    console.log(email);
    this.authService.resetPassword(email);
  }
}
