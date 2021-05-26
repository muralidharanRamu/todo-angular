import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authencationService: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    const user = new User(this.loginForm.value.email, this.loginForm.value.password);
    if (this.authencationService.authenticate(user)) {
      this.router.navigate(['home']);
    }
  }
}
