import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Christinas Adventskalender';

  loginEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  handleLogin(event: boolean) {
    this.loginEvent.next(event);
  }
}
