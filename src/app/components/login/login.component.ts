import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor( 
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private router: Router) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.loginForm = this.fb.group({
      username: ['kminchelle', Validators.required],
      password: ['0lelplR', Validators.required],
    })
  }
  onSubmit() {
    this.loginService.getLoginAccess({
      "username": this.loginForm.value['username'],
      "password": this.loginForm.value['password']
    }).subscribe((result: any) => {
      if(result) {
        sessionStorage.setItem('user', JSON.stringify(result))
        this.router.navigate(['/home'])
      }
    })

  }

}
