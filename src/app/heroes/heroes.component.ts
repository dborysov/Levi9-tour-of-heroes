import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
        this.getHeroes();
    }

    getHeroes(): void {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this._router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; };

        this._heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this._heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }
}
