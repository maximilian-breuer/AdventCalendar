import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/main-page/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarDoorComponent } from './components/main-page/calendar-gallery/calendar-door/calendar-door.component';
import { CalendarGalleryComponent } from './components/main-page/calendar-gallery/calendar-gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { ContentViewComponent } from './components/main-page/calendar-gallery/calendar-door/content-view/content-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SnowFlakeComponent } from './snow-flake.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarDoorComponent,
    CalendarGalleryComponent,
    ContentViewComponent,
    SnowFlakeComponent,
    SecondPageComponent,
    MainPageComponent,
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
