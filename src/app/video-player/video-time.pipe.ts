import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoTime'
})
export class VideoTimePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    // return null;
    // console.log(value);
    return this.time_convert(value);

  }
  time_convert(sec_num) {
    sec_num = Math.round(sec_num);
    const  hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    // if (hours < 10) {hours = '0' + hours;}
    if (minutes < 10) {minutes = '0' + minutes;}
    if (seconds < 10) {seconds = '0' +seconds;}
    return minutes + ':' + seconds;
  }

}
