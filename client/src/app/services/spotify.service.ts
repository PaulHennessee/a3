//Base Code: provided by Mark Baldwin
//Altered by: Paul Hennessee

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';
import { TrackFeature } from '../data/track-feature';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	expressBaseUrl:string = 'http://localhost:8888';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
    //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
    //update the return to instead return a Promise with the data from the Express server

    //this.http.get(//specify where this should go: expressBaseUrl+endpoint).toPromise();
    //call fetch(url)?
    return this.http.get(this.expressBaseUrl + endpoint).toPromise();
    //get returns a promise
    //return Promise.resolve();//old code
  }

  aboutMe():Promise<ProfileData> {
    //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category:string, resource:string):Promise<ResourceData[]> {
    //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
    //Make sure you're encoding the resource with encodeURIComponent().
    //Depending on the category (artist, track, album), return an array of that type of data.
    //JavaScript's "map" function might be useful for this, but there are other ways of building the array.

    var str = "/search/"+category+"/"+resource;
    /*console.log("in searchFor");
    console.log("str: "+str);
    //router.get('/search/:category/:resource', function(req, res, next) {
    //return this.http.get(str).toPromise<ResourceData[]>();
    /*this.sendRequestToExpress(str).then(
      (res)=>{
        //success
        console.log("successful return");
        return res;
      }, (res)=>{
        //failure
        console.log("failed return");
        return null;
      });*/
    return this.sendRequestToExpress(str);
  }

  getArtist(artistId:string):Promise<ArtistData> {
    //TODO: use the artist endpoint to make a request to express.
    //Again, you may need to encode the artistId.
    var str = "/artist/"+artistId;
    return this.sendRequestToExpress(str);
  }

  getRelatedArtists(artistId:string):Promise<ArtistData[]> {
    //TODO: use the related artist endpoint to make a request to express and return an array of artist data.
    var str = "/artist-related-artists/"+artistId;
    return this.sendRequestToExpress(str);
  }

  getTopTracksForArtist(artistId:string):Promise<TrackData[]> {
    //TODO: use the top tracks endpoint to make a request to express.
    var str = "/artist-top-tracks/"+artistId;
    return this.sendRequestToExpress(str);
  }

  getAlbumsForArtist(artistId:string):Promise<AlbumData[]> {
    //TODO: use the albums for an artist endpoint to make a request to express.
    var str = "/artist-albums/"+artistId;
    return this.sendRequestToExpress(str);
  }

  getAlbum(albumId:string):Promise<AlbumData> {
    //TODO: use the album endpoint to make a request to express.
    var str = "/album/"+albumId;
    return this.sendRequestToExpress(str);
  }

  getTracksForAlbum(albumId:string):Promise<TrackData[]> {
    //TODO: use the tracks for album endpoint to make a request to express.
    var str = "/album-tracks/"+albumId;
    return this.sendRequestToExpress(str);
  }

  getTrack(trackId:string):Promise<TrackData> {
    //TODO: use the track endpoint to make a request to express.
    var str = "/track/"+trackId;
    return this.sendRequestToExpress(str);
  }

  getAudioFeaturesForTrack(trackId:string):Promise<TrackFeature[]> {
    //TODO: use the audio features for track endpoint to make a request to express.
    var str = "/track-audio-features/"+trackId;
    return this.sendRequestToExpress(str);
  }
}
