/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

describe('App: Levi9TourOfHeroes', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                HeroesComponent,
                HeroDetailComponent
            ],
        });
    });

    xit('should create the app', async(() => {
        let fixture = TestBed.createComponent(HeroesComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    xit(`should have as title 'app works!'`, async(() => {
        let fixture = TestBed.createComponent(HeroesComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));

    xit('should render title in a h1 tag', async(() => {
        let fixture = TestBed.createComponent(HeroesComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
});
