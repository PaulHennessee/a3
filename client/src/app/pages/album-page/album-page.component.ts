import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';
import { EventEmitter } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css'],
  providers: [ SpotifyService ]
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
	tracks:TrackData[];
  albumChanged = new EventEmitter<ResourceData[]>();


  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) {
    this.tracks = [];
  }

  ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id');
  	//TODO: inject spotifyService and use it to get the album data and the tracks for the album
    var res = this.spotifyService.getAlbum(this.albumId);
    res.then((data)=>{
      //console.log("data")
      //console.log(data);
      this.album = new AlbumData(data);
      /*console.log(this.album);
      console.log("artists");
      console.log(this.album.artists);
      this.album.artists.forEach(element => {
        console.log(element);
      });*/
    });

    var track = this.spotifyService.getTracksForAlbum(this.albumId);
    track.then((data)=>{
      //console.log(data);
      data["items"].forEach((t)=>{
        //console.log(rel_art);
        this.tracks.push(new TrackData(t));
      });
    });
    this.albumChanged.emit(this.tracks);//emit data*/
  }

}
