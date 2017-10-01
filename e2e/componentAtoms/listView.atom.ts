import { by } from 'protractor';
import {IWebElementFinders} from 'selenium-webdriver';

export class ListViewAtom {
    private atom: IWebElementFinders;
    constructor (private parent: IWebElementFinders, selector: string) {
        this.atom = parent.findElement(by.css(selector));
    }
    getLoader() {
        return this.atom.findElement(by.css('.prezly-listview__loader'));
    }
}
