import { MyMovieappPage } from './app.po';

describe('my-movieapp App', () => {
  let page: MyMovieappPage;

  beforeEach(() => {
    page = new MyMovieappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
