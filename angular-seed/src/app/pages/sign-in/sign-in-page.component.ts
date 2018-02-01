import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
  })
export class SignInPageComponent implements OnInit {
    public usersService: UsersService;
    public signInForm: FormGroup;
   constructor(public formBuilder: FormBuilder, public router: Router) {
    }

  ngOnInit() {
     this.signInForm = this.formBuilder.group({
          username: '',
          password: ''
    });
  }
  
    doLogin() {
    this.usersService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['tasks']);
      }, error => {
      })
  }

}
