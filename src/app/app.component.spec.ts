import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatRadioModule,
  MatToolbarModule,
} from '@angular/material';
import { HiglightModule } from './higlight/higlight.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule, MatInputModule, MatCardModule, MatRadioModule, MatToolbarModule, HiglightModule, BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a variable searchTerm`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.searchTerm).toEqual('That wonderful Person of Sparta');
  }));

  it('should have an article', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    expect(compiled.querySelector('article')).toBeTruthy();
  }));

  it('should markdown correctly', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;

    const simpleText = 'That wonderful Person of Sparta';

    app.searchTerm = simpleText;
    fixture.detectChanges();
    expect(compiled.querySelector('mark').textContent).toContain(simpleText);
  }));

});
