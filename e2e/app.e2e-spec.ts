import { IfsPocPage } from './app.po';

describe('ifs-poc App', function() {
  let page: IfsPocPage;

  beforeEach(() => {
    page = new IfsPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
