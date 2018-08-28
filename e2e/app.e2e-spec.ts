import { TopDevsPage } from './app.po';

describe('top-devs App', function() {
  let page: TopDevsPage;

  beforeEach(() => {
    page = new TopDevsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
