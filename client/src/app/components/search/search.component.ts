import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private spotifyService:SpotifyService) {
    this.resources = [];
   }

  ngOnInit() {  }

  search() {
    //TODO: call search function in spotifyService and parse response
    //printing debugs
    /*console.log("searchcalled==============================");
    console.log("searchString: |"+this.searchString+"|");
    console.log("searchCategory: |"+this.searchCategory+"|");//*/
    this.resources = [];
    var res = this.spotifyService.searchFor(this.searchCategory, this.searchString);
    //once you get res, load the carousel with cards containing this info
    //use carousel component for artists and albums
    //use track-list for tracks.
    //console.log("back in search");
    
    res.then((resource)=>{
      /*console.log("success=================================================================");
      console.log("resource: ");
      console.log(resource);
      console.log("artists");
      console.log(resource["artists"]);
      console.log("tracks");
      console.log(resource["tracks"]);//*/
      if(this.searchCategory == "artist"){
        console.log("resources length before: "+this.resources.length);
        resource["artists"]["items"].forEach((data)=>{
          //console.log("artist iteration");
          var n:ArtistData = new ArtistData(data);
          //console.log(n);
          this.resources.push(n);
          //console.log("data: ");
          //console.log(data);
        });

        /*console.log("resources length before: "+this.resources.length);
        var walker = resource["artists"].next;
        while(walker != null){
          //fill loop
          resource["artists"]["items"].forEach((data)=>{
            //console.log("artist iteration");
            var n:ArtistData = new ArtistData(data);
            //console.log(n);
            this.resources.push(n);
            //console.log("data: ");
            //console.log(data);
          });
          walker = resource["artists"].next;
        }*/
      }
      else if(this.searchCategory == "album"){
        resource["albums"]["items"].forEach((data)=>{
          //console.log("album iteration");
          var n:AlbumData = new AlbumData(data);
          //console.log(n);
          this.resources.push(n);
          //console.log("data: ");
          //console.log(data);
        });//
      }
      else{
        resource["tracks"]["items"].forEach((data)=>{
          //console.log("album iteration");
          var n:TrackData = new TrackData(data);
          //console.log(n);
          this.resources.push(n);
          //console.log("data: ");
          //console.log(data);
        });//
      }
      console.log("resources length after: "+this.resources.length);
      this.searchChanged.emit(this.resources);//emit data*/
    }, (resource)=>{
      //console.log("failure");
    });//*/
  }

}
