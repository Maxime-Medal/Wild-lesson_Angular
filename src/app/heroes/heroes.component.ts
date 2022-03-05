import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

// Toujours importer le sympole Component d'Angular et annoter la classe du composant avec @ Component

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  hero : Hero = {
    id: 1,
    name: "Windstorm"
  };
  
  
  ngOnInit(): void {
  }
  
}
