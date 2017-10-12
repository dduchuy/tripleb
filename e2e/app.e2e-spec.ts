import { SampleEcomPage } from './app.po';

describe('sample-ecom App', () => {
  let page: SampleEcomPage;

  beforeEach(() => {
    page = new SampleEcomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
