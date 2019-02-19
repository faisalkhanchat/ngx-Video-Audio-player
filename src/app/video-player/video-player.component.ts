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
  volumnSlide: any;
  muteStatus: boolean;
  videoDuration = 0;
  videoCurrentTime = 1;
  videoDurationMin = 0;
  videoSteps: number;
  constructor() { }

  ngOnInit() {
    // console.log(this.videoUrl);
    // console.log(this.posterUrl);
  }

  ngAfterViewInit() {
  // console.log(this.getCurrentTime());
  }



  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('duration: ', video.duration);
    this.videoDuration = video.duration;
    this.videoSteps = this.videoDuration / 10;
    console.log(this.videoSteps);

   this.getCurrentTime();
   this.getCurrentVolumn();
   // this.volumnSlide = this.videoPlayer.nativeElement.volume;
  }

  getCurrentTime() {
    this.videoCurrentTime =  this.videoPlayer.nativeElement.currentTime ;
  }

  getCurrentVolumn() {
    this.volumnSlide = this.videoPlayer.nativeElement.volume;
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

  getVolumnChange() {
      // console.log(voll);
      this.volumnSlide = this.videoPlayer.nativeElement.volume;
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

  videoTimeUpdate() {
    this.getCurrentTime();
  }

  setVideoTime() {
    this.videoPlayer.nativeElement.currentTime =  this.videoCurrentTime;
  }

  toggleMute() {
    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
    this.muteStatus = !this.muteStatus;
  }

}
