import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnowCustomConfig } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class SnowflakeService {
  private snowData = new Subject<SnowCustomConfig>();

  constructor() {}

  getData() {
    return this.snowData;
  }

  updateData(data: SnowCustomConfig) {
    this.snowData.next(data);
  }
}
