import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';
import { EventEmitter } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css'],
  providers: [ SpotifyService ]
})
export class ArtistPageComponent implements OnInit {
	artistId:string;
	artist:ArtistData;
	relatedArtists:ArtistData[];
	topTracks:TrackData[];
	albums:AlbumData[];
  artistChanged = new EventEmitter<ResourceData[]>();

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) {
    this.relatedArtists = [];
    this.topTracks = [];
    this.albums = [];
  }

  ngOnInit() {
  	this.artistId = this.route.snapshot.paramMap.get('id');
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
    //console.log();
    // var category = this.route.url['_value'][0]['path'];
    //this.artistId = this.route.url['_value'][1]['path'];
    
    var res = this.spotifyService.getArtist(this.artistId);
    res.then((data)=>{
      //console.log(data);
      this.artist = new ArtistData(data);
      //console.log(this.artist);
    });

    var related = this.spotifyService.getRelatedArtists(this.artistId);
    related.then((data)=>{
      //console.log(data["artists"]);
      data["artists"].forEach((rel_art)=>{
        //console.log(rel_art);
        this.relatedArtists.push(new ArtistData(rel_art));
      });
    });
    var tracks = this.spotifyService.getTopTracksForArtist(this.artistId);
    tracks.then((data)=>{
      //console.log(data["tracks"]);
      data["tracks"].forEach((t)=>{
        //console.log(rel_art);
        this.topTracks.push(new TrackData(t));
      });
    });
    var album = this.spotifyService.getAlbumsForArtist(this.artistId);
    album.then((data)=>{
      //console.log(data);
      data["items"].forEach((a)=>{
        //console.log(data["items"]);
        //console.log(rel_art);
        this.albums.push(new AlbumData(a));
      });
    });
    this.artistChanged.emit(this.albums);//emit data*/
    this.artistChanged.emit(this.relatedArtists);//emit data*/
    this.artistChanged.emit(this.topTracks);//emit data*/
  }

}