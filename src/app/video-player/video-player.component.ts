import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {

  @Input() videoUrl: string;
  @Input() posterUrl: string;
  @ViewChild('videoPlayer') videoPlayer: any;
  currentTime: 0;
  playPauseBtn = true;
  volumnSlide = 0.1;
  videoDuration = 0;
  videoCurrentTime = 1;
  videoDurationMin = 0;
  videoSteps: number;
  constructor() { }

  ngOnInit() {
    console.log(this.videoUrl);
    console.log(this.posterUrl);
  }

  ngAfterViewInit() {
   console.log(this.getCurrentTime());
  }
  getCurrentTime() {
    return  this.videoCurrentTime =  this.videoPlayer.nativeElement.currentTime ;
  }
  // getDuration(v) {
  //   let dur = v.duration;
  //   dur = dur.toFixed();
  //   this.video.length = dur;
  //   return dur;
  // }

  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('duration: ', video.duration);
    this.videoDuration = video.duration;
    this.videoSteps = this.videoDuration / 10;
    console.log(this.videoSteps);
  }

  toggleVideo(event: any) {

    if (this.playPauseBtn) {
      this.videoPlayer.nativeElement.play();
      this.playPauseBtn = !this.playPauseBtn;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.playPauseBtn = !this.playPauseBtn;
    }
  }

  onSoundChange(event: any) {
    this.videoPlayer.nativeElement.volume = this.volumnSlide;
    console.log(this.volumnSlide);
  }

  videoLenghtChanged() {
    this.videoPlayer.nativeElement.currentTime = this.videoCurrentTime;
   console.log(this.videoCurrentTime);
  }



  vidEnded() {
    // alert();
    this.playPauseBtn = true;
  }

  videoChanged() {
    this.videoLenghtChanged();
  }

  videoTimeUpdate(a, info) {
    // this.videoLenghtChanged();
    this.getCurrentTime();
    // console.log(a);
    // console.log('tim eupdated ');
   //  alert();
    
  }

}
