import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {

    private _heroesUrl = 'app/heroes';
    private _headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this._http.get(this._heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this._heroesUrl}/${hero.id}`;

        return this._http
            .put(url, JSON.stringify(hero), { headers: this._headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this._http
            .post(this._heroesUrl, JSON.stringify({ name: name }), { headers: this._headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this._heroesUrl}/${id}`;
        return this._http.delete(url, { headers: this._headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error) {
        console.log(error);
    }
}
