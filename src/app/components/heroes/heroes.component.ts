import {Component, OnInit} from '@angular/core';
import {Hero} from '../../hero';
import {HEROES} from '../../mock-heroes';
import {HeroService} from '../../services/hero.service';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  heroes: Hero[];

  selectedHero: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.heroService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      }, error => {
        console.error(error);
      }, () => {
        console.log('getHeroes success');
      });
  }
}
