import { Component, Input, OnInit } from '@angular/core';
import { NgIf, UpperCasePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [FormsModule, UpperCasePipe, NgIf],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  // getHero(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.heroService.getHero(id)
  //     .subscribe((hero) => (this.hero = hero));
  // }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
