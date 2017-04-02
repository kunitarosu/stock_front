import { StockFrontPage } from './app.po';

describe('stock-front App', function() {
  let page: StockFrontPage;

  beforeEach(() => {
    page = new StockFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
