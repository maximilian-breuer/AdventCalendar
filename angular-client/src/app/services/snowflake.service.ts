import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SnowCustomConfig } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class SnowflakeService {
  private snowData = new BehaviorSubject<SnowCustomConfig>({
    fastSpeed: false,
    snowColor: '#ffffff',
  });

  constructor() {}

  getData() {
    return this.snowData;
  }

  updateData(data: SnowCustomConfig) {
    this.snowData.next(data);
  }
}
