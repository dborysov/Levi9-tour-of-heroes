import { Levi9TourOfHeroesPage } from './app.po';

describe('levi9-tour-of-heroes App', function() {
  let page: Levi9TourOfHeroesPage;

  beforeEach(() => {
    page = new Levi9TourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
