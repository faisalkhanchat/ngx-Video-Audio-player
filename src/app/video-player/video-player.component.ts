import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {

  @Input() videoUrl: string;
  @Input() posterUrl: string;
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement>;
  currentTime: 0;
  playPauseBtn = true;
  volumnSlide: any;
  muteStatus: boolean;
  videoBuffered = 0;
  videoBufferedData = 0;
  fullMode = false;
  videoDuration = 0;
  videoCurrentTime = 1;
  videoDurationMin = 0;
  videoSteps: number;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }


  onMetadata(e, video) {
    console.log('metadata: ', e);
    console.log('duration: ', video.duration);
    this.videoDuration = video.duration;
    this.videoSteps = this.videoDuration / 10;
    console.log(this.videoSteps);
    this.videoCurrentTime = this.getCurrentVideoTime();
    this.getCurrentVolumn();
    
  }



  getCurrentVolumn() {
    this.volumnSlide = this.videoPlayer.nativeElement.volume;
  }

  // ================= Button Toggle Events ================ //

  toggleFullScreen() {
    const videoElement = this.videoPlayer.nativeElement.requestFullscreen();
    this.fullMode = !this.fullMode;
  }
  toggleMute() {
    this.videoPlayer.nativeElement.muted = !this.videoPlayer.nativeElement.muted;
    this.muteStatus = !this.muteStatus;
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

    // ================= Volumn Events ================ //

  getVolumnChange() {
    this.getCurrentVolumn();
  }
  setVolumn() {
    this.videoPlayer.nativeElement.volume = this.volumnSlide;
  }

  // ================= Video Time  Events ================ //

  videoLenghtChanged() {
    this.videoPlayer.nativeElement.currentTime = this.videoCurrentTime;
    // console.log(this.videoCurrentTime);
  }

  vidEnded() {
    // alert();
    this.playPauseBtn = true;
  }
  getCurrentVideoTime() {
    return this.videoPlayer.nativeElement.currentTime;
  }
  videoTimeUpdate() {
    this.videoCurrentTime = this.getCurrentVideoTime();
    // console.log(this.videoPlayer.nativeElement.duration);
  }

  setVideoTime() {
    this.videoPlayer.nativeElement.currentTime = this.videoCurrentTime;
  }

  // ================= Video Time  Events ================ //

  videoProgress() {
    setTimeout(() => {
      this.videoBufferedData = Math.round(( this.videoPlayer.nativeElement.buffered.end(0)  / this.videoPlayer.nativeElement.duration) * 100);
      console.log( this.videoBufferedData + 'sd asdfasdf') ;
      
    }, 10);
    console.log('progress============');


  }

}
