import {Directive, ElementRef, Input, AfterViewChecked, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { PrepareTextService } from './prepare-text.service';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit, OnChanges {

  @Input() searchTerm: string;
  @Input() caseSensitive?: string;

  textBeforeMarkdown: string;

  isCaseSensitive = (caseSensitive: string) => caseSensitive === 'sensitive';

  constructor(private el: ElementRef, private prepareTextService: PrepareTextService) { }

  ngAfterViewInit() {
    this.performHighlight();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.textBeforeMarkdown) {
      this.performHighlight();
    }
  }

  performHighlight() {
    const article = this.el.nativeElement;
    const html = article.innerHTML;
    if (!this.textBeforeMarkdown) {
      this.textBeforeMarkdown = html;
    }

    const regExpParams = this.isCaseSensitive(this.caseSensitive) ? '' : 'i';

    let regex = this.prepareTextService.findElementRegex(this.searchTerm, regExpParams);
    const elementMatches = this.textBeforeMarkdown.match(regex);

    if (elementMatches && this.searchTerm !== '') {
      const elemWithRegex = elementMatches[0];

      regex = this.prepareTextService.findTextWithinElRegex(this.searchTerm, regExpParams);
      const elemWithHighlight = elemWithRegex.replace(regex, '<mark>$1</mark>');

      article.innerHTML = this.textBeforeMarkdown.replace(elemWithRegex, elemWithHighlight);
    } else {
      article.innerHTML = this.textBeforeMarkdown;
    }
  }
}
