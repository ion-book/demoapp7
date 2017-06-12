import { Demoapp7Page } from './app.po';

describe('demoapp7 App', () => {
  let page: Demoapp7Page;

  beforeEach(() => {
    page = new Demoapp7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
