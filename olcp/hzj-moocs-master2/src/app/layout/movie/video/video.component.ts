import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {VideoService} from '../../../service/video.service';
import {Video} from '../../../entity/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video: Video;

  videoUrl = 'http://static.videogular.com/assets/videos/videogular.mp4';
  //设置图标箭头
  arrow: string = 'arrow_back';

  videoNum;

  constructor(private activatedRoute: ActivatedRoute,
              private videoService: VideoService) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.videoNum = params['id'];
        console.log(this.videoNum);
        this.playVideo();

      })

  }

  //显示播放列表
  showMenu(drawer: any) {
    drawer.toggle();
    if (this.arrow == 'arrow_back') {
      this.arrow = 'arrow_forward';
    } else {
      this.arrow = 'arrow_back';
    }
  }

  playVideo() {
    this.videoService.playVideo(this.videoNum)
      .subscribe((data: any) => {
        console.log(data);
        this.videoUrl = data.url;
        console.log(this.videoUrl);

      })
  }

}
