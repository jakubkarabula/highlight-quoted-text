import { Injectable } from '@angular/core';
import { escapeRegExp } from 'lodash';

@Injectable()
export class PrepareTextService {

  constructor() { }

  public escape = (text: string) => {
    return escapeRegExp(text).split(' ').join('\\s+');
  }

  public findElementRegex = (text: string, regExpParams: string): RegExp => {
    /* Allow many white spaces between words for unified UX */
    const searchTerm = this.escape(text);

    return new RegExp(`(^|>)([^<]*)(${searchTerm})([^>]*)(<|$)`, regExpParams);
  }

  public findTextWithinElRegex = (text: string, regExpParams: string) => {
    const searchTerm = this.escape(text);

    return new RegExp(`(${searchTerm})`, regExpParams);
  }
}
