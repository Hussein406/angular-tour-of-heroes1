import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mockheroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
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
export class HeroesComponent {
  heroes = HEROES;
  selectedHero: Hero | undefined;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('Clicked!!', hero.name);
  }
}
