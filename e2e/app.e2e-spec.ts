import { VideogularStarterPage } from './app.po';

describe('videogular-starter App', () => {
  let page: VideogularStarterPage;

  beforeEach(() => {
    page = new VideogularStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
