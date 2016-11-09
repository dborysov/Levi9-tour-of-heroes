import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

import { HeroSearchService } from '../hero-search.service';

import { Hero } from '../hero';

@Component({
    selector: 'my-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.scss'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

    heroes: Observable<Hero[]>;
    private _searchTerms = new Subject<string>();

    constructor(
        private _heroSearchService: HeroSearchService,
        private _router: Router
    ) { }

    search(term: string): void {
        this._searchTerms.next(term);
    }

    ngOnInit() {
        this.heroes = this._searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this._heroSearchService.search(term)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });

    }

    gotoDetail(hero: Hero): void {
        const link = ['/detail', hero.id];
        this._router.navigate(link);
    }

}
