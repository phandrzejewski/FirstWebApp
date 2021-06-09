import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import { Heroes } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
 
export class HeroesComponent implements OnInit {

  constructor() { }
  heroes = Heroes;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroesTitle='Current list of my Heroes!';

  ngOnInit(): void {
  }
}
