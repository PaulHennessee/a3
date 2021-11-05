import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() color:string;
  @Input() name:string;
  @Input() percent:number;

  constructor() { }

  ngOnInit() {
    console.log("therm constructor");
    console.log(this.name);
    console.log(this.color);
    console.log(this.percent);
  }

}
