import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

interface SnowFlakeConfig {
  depth: number;
  left: number;
  speed: number;
  top: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  title = 'Advent Calendar';
  mobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  public snowFlakes: SnowFlakeConfig[];

  loginEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private loginService: LoginService) {
    if (loginService.loggedIn()) {
      this.loginEvent.next(true);
    }
    this.snowFlakes = [];

    for (var i = 1; i <= 150; i++) {
      this.snowFlakes.push({
        depth: this.randRange(1, 5),
        left: this.mobile ? this.randRange(0, 90) : this.randRange(0, 97),
        speed: this.randRange(1, 5),
        top: 0,
      });
    }

    window.addEventListener('resize', (event) => {
      if (window.innerWidth == screen.width && !this.mobile) {
        window.scrollTo(0, 0);
      }
    });

    window.addEventListener('scroll', (event) => {
      // if completely scrolled up on desktop
      if (window.scrollY == 0 && window.innerWidth >= 1900) {
        this.snowFlakes = [];
        for (var i = 1; i <= 150; i++) {
          this.snowFlakes.push({
            depth: this.randRange(1, 5),
            left: this.randRange(0, 97),
            speed: this.randRange(1, 5),
            top: 0,
          });
        }
        return;
      }

      // add new snowflakes with different top value
      this.snowFlakes.splice(0, 5);
      for (var i = 1; i <= 5; i++) {
        this.snowFlakes.push({
          depth: this.randRange(1, 5),
          left: this.mobile ? this.randRange(0, 90) : this.randRange(0, 90),
          speed: this.randRange(1, 5),
          top: window.scrollY,
        });
      }
    });
  }

  handleLogin(event: boolean) {
    this.loginEvent.next(event);
  }

  private randRange(min: number, max: number): number {
    var range = max - min;

    return min + Math.round(Math.random() * range);
  }
}
