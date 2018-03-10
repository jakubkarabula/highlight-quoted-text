import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { PrepareTextService } from './prepare-text.service';

@Component({
  selector: 'app-my-test-component',
  template: `<article appHighlight [searchTerm]="searchTerm" [caseSensitive]="caseSensitive">
    Text in parent
    <span>Simple test</span>
    <p><span>Nested text</span></p>
    <pre>
      Text in
      pre tag
    </pre>
    <p>
      TEXT FOR CASE INSENSITIVE TEST
    </p>
    Text at the parent end
  </article>`
})
class TestComponent {
  public searchTerm = '';
  public caseSensitive = 'sensitive';
}

describe('HighlightDirective', () => {
  let componentFixture: ComponentFixture<TestComponent>,
    app = null,
    compiled = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightDirective, TestComponent ],
      providers: [ PrepareTextService ],
    });

    TestBed.compileComponents();
    componentFixture = TestBed.createComponent(TestComponent);
    componentFixture.detectChanges();
    app = componentFixture.debugElement.componentInstance;
    compiled = componentFixture.debugElement.nativeElement;
  });

  it('should mark text in \<p\>', () => {
    app.searchTerm = 'Simple test';
    componentFixture.detectChanges();

    expect(compiled.querySelector('mark').textContent).toContain('Simple test');
  });

  it('should mark text in parent node', () => {
    app.searchTerm = 'Text in parent';
    componentFixture.detectChanges();

    expect(compiled.querySelector('mark').textContent).toContain('Text in parent');
  });

  it('should mark nested text', () => {
    app.searchTerm = 'Nested text';
    componentFixture.detectChanges();

    expect(compiled.querySelector('mark').textContent).toContain('Nested text');
  });

  it('should mark text in \<pre\>', () => {
    app.searchTerm = 'Text in pre tag';
    componentFixture.detectChanges();

    expect(compiled.querySelector('mark').textContent).toContain('Text in\n      pre tag');
  });

  it('should mark text at the end of parent node', () => {
    app.searchTerm = 'Text at the parent end';
    componentFixture.detectChanges();

    expect(compiled.querySelector('mark').textContent).toContain('Text at the parent end');
  });

  it('should mark text without case sensitivity', () => {
    app.searchTerm = 'text for case insensitive test';
    app.caseSensitive = 'insensitive';
    componentFixture.detectChanges();

    expect(compiled.querySelector('mark').textContent).toContain('TEXT FOR CASE INSENSITIVE TEST');
  });

  it('should mark text at the end of parent node', () => {
    app.searchTerm = 'Text at the parent end';
    componentFixture.detectChanges();

    expect(compiled.querySelector('mark').textContent).toContain('Text at the parent end');
  });
});
