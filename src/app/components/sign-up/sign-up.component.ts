import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent{
  form: FormGroup;

  constructor(formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.form = formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submit(){
    if (this.form.valid){
      this.userService.signUp({
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value})
        .subscribe(next => this.router.navigate(['/sign-in']));
    }
  }
}
