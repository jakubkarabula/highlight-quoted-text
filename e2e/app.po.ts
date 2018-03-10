import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.mat-toolbar span')).getText();
  }

  getMarkdown() {
    return element(by.css('mark')).getText();
  }
}
