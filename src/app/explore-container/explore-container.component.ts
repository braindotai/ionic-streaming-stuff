import { Component, OnInit, Input } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@awesome-cordova-plugins/streaming-media/ngx';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: false
  };

  constructor(private streamingMedia: StreamingMedia) { }

  ngOnInit() {
    console.log('streaming...');
    this.streamingMedia.playVideo('rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4', this.options);
  }
}
