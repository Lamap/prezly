import {Component, Input, OnInit} from '@angular/core';
import {IPreziCreator} from "../../services/prezi-query.service";

export interface IUser {
    firstName: string;
    lastName: string;
    image?: string;
}

@Component({
  selector: 'prezly-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})

export class AvatarComponent implements OnInit {

    public letters: string;
    public color: string;
    //TODO: generate color from user hash

    constructor() {
        this.user = {
            name: 'John Cleese',
            profileUrl: '#profile'
      };
    }
    @Input() user: IPreziCreator;

  ngOnInit() {
      this.letters = this.convertNamesToMonogram(this.user.name);
  }
  private convertNamesToMonogram(name: string): string {
      let monogram: string = '';
      const partials = name.split(' ');
      for (let i = 0; i < 2; i++) {
          monogram += partials[i][0];
      }
      return monogram.toUpperCase();
  }
}
