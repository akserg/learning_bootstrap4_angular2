import { EcommerceFirebasePage } from './app.po';

describe('ecommerce-firebase App', function() {
  let page: EcommerceFirebasePage;

  beforeEach(() => {
    page = new EcommerceFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
