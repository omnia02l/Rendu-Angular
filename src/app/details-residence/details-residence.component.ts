import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-residence',
  templateUrl: './details-residence.component.html',
  styleUrls: ['./details-residence.component.css']
})
export class DetailsResidenceComponent {

  constructor( private actR:ActivatedRoute) { }
  
  name!:string;

  ngOnInit(): void {
    this.name=this.actR.snapshot.params['x'];
  }
}
