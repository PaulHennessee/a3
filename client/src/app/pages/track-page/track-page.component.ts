import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';
import { SpotifyService } from 'src/app/services/spotify.service';
import { EventEmitter } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
  providers: [ SpotifyService ]
})
export class TrackPageComponent implements OnInit {
	trackId:string;
	track:TrackData;
  audioFeatures:TrackFeature[];
  trackChanged = new EventEmitter<ResourceData[]>();

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) {
    this.audioFeatures = [];
  }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id');
  	//TODO: Inject the spotifyService and use it to get the track data and it's audio features
    var res = this.spotifyService.getTrack(this.trackId);
    res.then((data)=>{
      console.log("data")
      console.log(data);
      this.track = new TrackData(data);
      /*console.log(this.album);
      console.log("artists");
      console.log(this.album.artists);
      this.album.artists.forEach(element => {
        console.log(element);
      });*/
    });

    /*var features = this.spotifyService.getAudioFeaturesForTrack(this.trackId);
    features.then((data)=>{
      console.log(data);
      data["items"].forEach((t)=>{
        //console.log(rel_art);
        this.audioFeatures.push(new TrackFeature(t));
      });
    });
    this.albumChanged.emit(this.tracks);//emit data*/
  }

}
