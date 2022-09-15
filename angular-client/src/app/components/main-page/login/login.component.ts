import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { loginInformation as LoginInformation } from '../../../../assets/assets';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({ password: '' });
  displayError = false;

  @Output() onLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // login if password is correct, otherwise display error
    if (
      this.loginForm.controls['password'].value == LoginInformation.password
    ) {
      this.loginForm.reset();
      this.onLogin.emit(true);
      this.loginService.login();
    } else {
      this.displayError = true;
    }
  }
}
