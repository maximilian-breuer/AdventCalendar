import { Component } from '@angular/core';
import { SnowflakeService } from 'src/app/services/snowflake.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent {
  fastSnow = false;
  selectedColor = '#ffffff';
  constructor(private snowflakeService: SnowflakeService) {
    this.fastSnow = snowflakeService.getData().value.fastSpeed;
    this.selectedColor = snowflakeService.getData().value.snowColor;
  }

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
