import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	@Input() carouselId:string;
	@Input() resources:ResourceData[];

  constructor() { }

  ngOnInit() {
    //edit this to be populated with carousel cards.
    /*
    <!--TODO: edit *ngFor to populate carousel with carousel-card components.-->
    <!--carousel-card can bind a single resource as an Input.-->
    <!--"let first=first" sets the "first" variable to be true for the first card in the carousel. The [ngClass] assigns the active property to it-->
    <!--https://stackoverflow.com/questions/44288434/angular-2-ngfor-first-last-index-loop--> */
    

  }

}
