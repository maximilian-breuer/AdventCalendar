import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SnowflakeService } from './services/snowflake.service';

export interface SnowFlakeConfig {
  depth: number;
  left: number;
  speed: number;
  top: number;
  color: string;
}

export interface SnowCustomConfig {
  fastSpeed: boolean;
  snowColor: string;
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
  snowCustomConfig = {
    fastSpeed: false,
    snowColor: '#ffffff',
  };

  public snowFlakes: SnowFlakeConfig[];

  constructor(
    private snowflakeService: SnowflakeService,
    private router: Router
  ) {
    router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        // setTimeout(() => {
        //   console.log('scroolll');
        //   window.scrollTo(0, 0);
        // }, 1000);
        // document.querySelector('secondPage')!.scrollTop = 0;
        this.snowFlakes = [];

        for (var i = 1; i <= 150; i++) {
          this.snowFlakes.push({
            depth: this.randRange(1, 5),
            left:
              this.mobile || window.innerWidth < 1900
                ? this.randRange(0, 90)
                : this.randRange(0, 97),
            speed: this.snowCustomConfig.fastSpeed ? 6 : this.randRange(1, 5),
            top: 0,
            color: this.snowCustomConfig.snowColor,
          });
        }
      }
    });

    this.snowCustomConfig.fastSpeed = this.snowflakeService
      .getData()
      .getValue().fastSpeed;
    this.snowCustomConfig.snowColor = this.snowflakeService
      .getData()
      .getValue().snowColor;

    this.snowFlakes = [];

    for (var i = 1; i <= 150; i++) {
      this.snowFlakes.push({
        depth: this.randRange(1, 5),
        left: this.mobile ? this.randRange(0, 90) : this.randRange(0, 97),
        speed: this.snowCustomConfig.fastSpeed ? 6 : this.randRange(1, 5),
        top: 0,
        color: this.snowCustomConfig.snowColor,
      });
    }

    window.addEventListener('resize', (event) => {
      if (window.innerWidth == screen.width) {
        this.snowFlakes = [];
        for (var i = 1; i <= 150; i++) {
          this.snowFlakes.push({
            depth: this.randRange(1, 5),
            left: this.randRange(0, 97),
            speed: this.snowCustomConfig.fastSpeed ? 6 : this.randRange(1, 5),
            top: 0,
            color: this.snowCustomConfig.snowColor,
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
            speed: this.snowCustomConfig.fastSpeed ? 6 : this.randRange(1, 5),
            top: 0,
            color: this.snowCustomConfig.snowColor,
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
          speed: this.snowCustomConfig.fastSpeed ? 6 : this.randRange(1, 5),
          top: window.scrollY,
          color: this.snowCustomConfig.snowColor,
        });
      }
    });
  }

  ngOnInit() {
    this.snowflakeService.getData().subscribe((data) => {
      // change speed
      if (this.snowCustomConfig.fastSpeed != data.fastSpeed) {
        this.snowCustomConfig.fastSpeed = data.fastSpeed;
        if (this.snowCustomConfig.fastSpeed) {
          for (var i = 0; i < this.snowFlakes.length; i++) {
            this.snowFlakes[i].speed = 6;
          }
          for (var i = 1; i <= 400; i++) {
            this.snowFlakes.push({
              depth: this.randRange(1, 5),
              left: this.randRange(0, 97),
              speed: 6,
              top: 0,
              color: this.snowCustomConfig.snowColor,
            });
          }
        } else {
          for (var i = 0; i < 150; i++) {
            this.snowFlakes[i].speed = this.randRange(1, 5);
            this.snowFlakes.splice(151, 400);
          }
        }
      }

      // change color
      if (this.snowCustomConfig.snowColor != data.snowColor) {
        this.snowCustomConfig.snowColor = data.snowColor;
        for (var i = 0; i < this.snowFlakes.length; i++) {
          this.snowFlakes[i].color = this.snowCustomConfig.snowColor;
          this.snowFlakes[i].speed = this.snowCustomConfig.fastSpeed
            ? 6
            : this.randRange(1, 5);
        }
      }
    });
  }

  private randRange(min: number, max: number): number {
    var range = max - min;

    return min + Math.round(Math.random() * range);
  }
}
