import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
