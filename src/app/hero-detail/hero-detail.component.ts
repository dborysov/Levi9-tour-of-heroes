import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _route: ActivatedRoute,
        private _location: Location
    ) { }

    ngOnInit(): void {
        this._route.params.forEach((params) => {
            let id = +params['id'];
            this._heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        this._location.back();
    }

}
