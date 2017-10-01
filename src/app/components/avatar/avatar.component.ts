import {Component, Input, OnInit} from '@angular/core';
import {IPreziCreator} from "../../services/prezi-query.service";

export interface IUser {
    firstName: string;
    lastName: string;
}

@Component({
  selector: 'prezly-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})

export class AvatarComponent implements OnInit {

    public letters: string;
    public color: string;
 //TODO: generate color from a color set from user hash

    constructor() {
        this.user = {
            name: 'John Cleese',
            profileUrl: '#profile'
      };
    }
    @Input() user: IPreziCreator;

  ngOnInit() {
      this.letters = this.convertNamesToMonogram(this.user.name);
      this.color = '#' + this.intToRGB(this.hashCode(this.user.name));
  }
  private convertNamesToMonogram(name: string): string {
      let monogram: string = '';
      const partials = name.split(' ');
      for (let i = 0; i < 2; i++) {
          monogram += partials[i][0];
      }
      return monogram.toUpperCase();
  }

  private hashCode(str: string) { // java String#hashCode
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private intToRGB (i: number) {
    const c: string = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;
  }
}
