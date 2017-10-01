import { AppPage } from './app.po';
import {browser} from 'protractor';
import {IWebElementFinders} from "selenium-webdriver";

describe('prezly App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('John Cleese');
  });
  it('Loading is happening', () => {
    /*
    const listView = page.getListView();
    listView.getLoader().then((loader) => {
      expect(loader.getText()).toEqual('Loading...');
    });
    */
  });
});
