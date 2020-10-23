import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private activeRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    console.log(this.activeRoute);
    console.log(this.activeRoute.snapshot);
    console.log(this.activeRoute.snapshot.paramMap);
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
