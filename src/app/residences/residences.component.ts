import { Component } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences=[
    {id:1,"name": "Elfel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg"},
     {id:4,"name": "El Anber","address":"Manzah 5", "image":"../../assets/images/R4.jpg"}
   ];
 
}
