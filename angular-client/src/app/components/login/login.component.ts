import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { loginInformation as LoginInformation } from '../../../assets/assets';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({ password: '' });

  @Output() onLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // (document.querySelector('html') as HTMLElement).style.filter = 'blur(8px)';
    // (document.querySelector('#main') as HTMLElement).style.filter = 'blur(0px)';
  }

  onSubmit(): void {
    // login if password is correct
    if (this.loginForm.invalid) return;

    if (
      this.loginForm.controls['password'].value == LoginInformation.password
    ) {
      this.onLogin.emit(true);
    }
  }

  login(): void {
    // remove bluring
    (document.querySelector('html') as HTMLElement).style.filter = 'blur(0px)';
    // reset login variable
    // TODO
  }
}
