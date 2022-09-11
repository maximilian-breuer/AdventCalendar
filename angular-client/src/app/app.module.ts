import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarDoorComponent } from './components/calendar-door/calendar-door.component';
import { CalendarGalleryComponent } from './components/calendar-gallery/calendar-gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { ContentViewComponent } from './components/calendar-door/content-view/content-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SnowFlakeComponent } from './snow-flake.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarDoorComponent,
    CalendarGalleryComponent,
    ContentViewComponent,
    SnowFlakeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMasonryModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
