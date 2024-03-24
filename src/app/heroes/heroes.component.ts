import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mockheroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf,
    UpperCasePipe,
    FormsModule,
    HeroDetailComponent,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('Clicked!!', hero.name);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
