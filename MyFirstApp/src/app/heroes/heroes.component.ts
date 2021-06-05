import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
 
export class HeroesComponent implements OnInit {

  constructor() { }

  hero: Hero = {
    level: 1,
    name: 'Jaina'
  }
  heroesTitle='Current list of my Heroes!';

  ngOnInit(): void {
  }
}
