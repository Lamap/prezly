import { browser, by, element } from 'protractor';
import {IWebElementFinders} from 'selenium-webdriver';
import {ListViewAtom} from './componentAtoms/listView.atom';

export class AppPage {
    private atom;
    constructor () {
        this.atom = element(by.css('.prezly'));
    }
    navigateTo() {
        return browser.get('/');
    }

    getHeaderText() {
        return element(by.css('.prezly-header__username')).getText();
    }
    getListView() {
        return new ListViewAtom(this.atom, '.prezly-listview');
    }
}
