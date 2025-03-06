import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {catchError} from 'rxjs';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  form: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  unauhorized: boolean = false;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  submit() {
    if (this.form.valid){
      this.userService.signIn({email: this.form.value.email, password: this.form.value.password})
        .pipe(catchError(error => {
          this.unauhorized = true;
          return error;
        }))
        .subscribe(u => this.router.navigate(['/auction-list']));
    }
  }
}
