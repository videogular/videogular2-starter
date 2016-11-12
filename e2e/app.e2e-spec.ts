import { Videogular2StarterPage } from './app.po';

describe('videogular2-starter App', function() {
  let page: Videogular2StarterPage;

  beforeEach(() => {
    page = new Videogular2StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
