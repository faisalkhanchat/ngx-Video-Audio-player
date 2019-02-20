import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { VideoTimePipe } from './video-time.pipe';
@NgModule({
  declarations: [VideoPlayerComponent, VideoTimePipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    BrowserModule,
  ],
  exports: [VideoPlayerComponent],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
]
})
export class VideoPlayerModule { }
