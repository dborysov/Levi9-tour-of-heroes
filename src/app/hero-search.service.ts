import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

    constructor(private _http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this._http
            .get(`app/heroes/?name=${term}`)
            .map(r => r.json().data as Hero[]);
    }

}
