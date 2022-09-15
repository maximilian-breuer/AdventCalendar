import { Component } from '@angular/core';

interface SnowFlakeConfig {
  depth: number;
  left: number;
  speed: number;
  top: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Christinas Adventskalender';
  mobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  public snowFlakes: SnowFlakeConfig[];

  constructor() {
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
      if (window.innerWidth == screen.width) {
        this.snowFlakes = [];
        for (var i = 1; i <= 150; i++) {
          this.snowFlakes.push({
            depth: this.randRange(1, 5),
            left: this.randRange(0, 97),
            speed: this.randRange(1, 5),
            top: 0,
          });
        }
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

  private randRange(min: number, max: number): number {
    var range = max - min;

    return min + Math.round(Math.random() * range);
  }
}
