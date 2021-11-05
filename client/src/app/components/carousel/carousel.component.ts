import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ResourceData } from '../../data/resource-data';
import { SearchComponent } from '../search/search.component';
import { ArtistPageComponent } from 'src/app/pages/artist-page/artist-page.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ SpotifyService , ArtistPageComponent]
})
export class CarouselComponent implements OnInit {
	@Input() carouselId:string;
	@Input() resources:ResourceData[];

  constructor(private searchComp:SearchComponent, private artist_page:ArtistPageComponent) {
    this.carouselId = "";
    this.resources = [];
  }

  ngOnInit() {
    //edit this to be populated with carousel cards.
    /*
    <!--TODO: edit *ngFor to populate carousel with carousel-card components.-->
    <!--carousel-card can bind a single resource as an Input.-->
    <!--"let first=first" sets the "first" variable to be true for the first card in the carousel. The [ngClass] assigns the active property to it-->
    <!--https://stackoverflow.com/questions/44288434/angular-2-ngfor-first-last-index-loop--> */
    this.searchComp.searchChanged.subscribe(
      (data:ResourceData[])=>{
        //console.log("searchChanged:");
        //console.log("data size: "+data.length);
        this.resources = data;
        //console.log(data);
        data.forEach((d)=>{
          //console.log('d:');
          //console.log(d);

        })
        //console.log("resources size: "+this.resources.length);
        
      });
      this.artist_page.artistChanged.subscribe(
        (data:ResourceData[])=>{
          //console.log("searchChanged:");
          //console.log("data size: "+data.length);
          this.resources = data;
          //console.log(data);
          data.forEach((d)=>{
            //console.log('d:');
            //console.log(d);
  
          })
          //console.log("resources size: "+this.resources.length);
          
        }
    );
    
  }

}
