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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarDoorComponent,
    CalendarGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMasonryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
