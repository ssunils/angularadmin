import { Ng4adminPage } from './app.po';

describe('ng4admin App', () => {
  let page: Ng4adminPage;

  beforeEach(() => {
    page = new Ng4adminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
