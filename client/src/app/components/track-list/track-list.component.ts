import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackData } from '../../data/track-data';
import { SearchComponent } from '../search/search.component';
import { ArtistPageComponent } from 'src/app/pages/artist-page/artist-page.component';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  providers: [ SearchComponent, ArtistPageComponent ]
})
export class TrackListComponent implements OnInit {
	@Input() tracks:TrackData[];
	@Input() hideArtist:boolean = false;
	@Input() hideAlbum:boolean = false;

  constructor(private searchComp:SearchComponent, private artist_pageComp:ArtistPageComponent) { this.tracks = []; this.hideAlbum = false; this.hideArtist = false;}

  ngOnInit() {
    this.searchComp.searchChanged.subscribe(
      (data:TrackData[])=>{
        //console.log("searchChanged:");
        //console.log("data size: "+data.length);
        this.tracks = data;
        //console.log(data);
        /*data.forEach((d)=>{
          console.log('d:');
          console.log(d);
          console.log("artist");
          console.log(d.primaryArtist);
        })
        console.log("resources size: "+this.tracks.length);*/
        
      }
    );
    this.artist_pageComp.artistChanged.subscribe(
      (data:TrackData[])=>{
        //console.log("searchChanged:");
        //console.log("data size: "+data.length);
        this.tracks = data;
        //console.log(data);
        /*data.forEach((d)=>{
          console.log('d:');
          console.log(d);
          console.log("artist");
          console.log(d.primaryArtist);
        })
        console.log("resources size: "+this.tracks.length);*/
        
      }
    );
  }

}
