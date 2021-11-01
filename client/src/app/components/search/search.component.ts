import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  searchChanged = new EventEmitter<ResourceData[]>();

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {}

  search() {
    //TODO: call search function in spotifyService and parse response
    //printing debugs
    /*console.log("searchcalled==============================");
    console.log("searchString: |"+this.searchString+"|");
    console.log("searchCategory: |"+this.searchCategory+"|");//*/

    var res = this.spotifyService.searchFor(this.searchCategory, this.searchString);
    //once you get res, load the carousel with cards containing this info
    //use carousel component for artists and albums
    //use track-list for tracks.
    //console.log("back in search");
    this.searchChanged.emit(this.resources);//emit data
    res.then((resource)=>{
      //console.log("success");
      console.log("resource: "+resource.toString());
      console.log(resource);
      console.log(resource["artists"]);
      console.log(resource["artists"]["items"][0]);
      //resource["artists"]
      /*resource["artists"].forEach((data)=>{
        console.log(data);
      });//*/
      this.resources = resource["artists"]["items"];
      console.log("resources length: "+this.resources.length);
      //var iter = resource1.values();
      /*for(var i in resource1){
        this.resources.push(i);
      }*/
      //this.resources = resource.slice();
      
    }, (resource)=>{
      //console.log("failure");
    });//*/
    
  }

}
