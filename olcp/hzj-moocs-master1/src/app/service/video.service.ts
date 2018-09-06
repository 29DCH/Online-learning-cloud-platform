import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  playVideo(chapter: string) {
    const url = `/olcp/video/play?chapter=${chapter}`;
    return this.http.get(url);
  }
}
