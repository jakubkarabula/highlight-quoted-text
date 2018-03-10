import { AppPage } from './app.po';

describe('highlight-quoted-text App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Highlight The Most Quoted Text');
  });

  it('should display markdown', () => {
    page.navigateTo();
    expect(page.getMarkdown()).toEqual('That wonderful Person of Sparta');
  });
});
