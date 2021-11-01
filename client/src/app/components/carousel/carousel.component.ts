import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ResourceData } from '../../data/resource-data';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [ SpotifyService ]
})
export class CarouselComponent implements OnInit {
	@Input() carouselId:string;
	@Input() resources:ResourceData[];

  constructor(private searchComp:SearchComponent) {
    this.carouselId = "";
    this.resources = [];
    console.log("carousel constructor: resources size: "+this.resources.length);
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
        this.resources = data;
      }
    );
    /*console.log("carousel init: resources size: "+this.resources.length);
    *ngFor
    *ngFor="let carousel of carousel; let first=first" [value]="carouselId" [checked]="first" class="carousel-item" [ngClass]="{'active': first}"*/
  }

}
