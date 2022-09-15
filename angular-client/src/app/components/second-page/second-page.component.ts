import { Component, OnInit } from '@angular/core';
import { SnowCustomConfig } from 'src/app/app.component';
import { SnowflakeService } from 'src/app/services/snowflake.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit {
  fastSnow = false;
  selectedColor = '#ffffff';
  constructor(private snowflakeService: SnowflakeService) {}

  ngOnInit(): void {}

  speedChange() {
    this.fastSnow = !this.fastSnow;
    this.snowflakeService.updateData({
      fastSpeed: this.fastSnow,
      snowColor: this.selectedColor,
    });
  }

  colorChange() {
    this.snowflakeService.updateData({
      fastSpeed: this.fastSnow,
      snowColor: this.selectedColor,
    });
  }
}
