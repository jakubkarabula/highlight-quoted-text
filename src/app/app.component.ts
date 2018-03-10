import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm = 'That wonderful Person of Sparta';
  caseSensitive = 'sensitive';

  testText = 'I am a variable from component\'s class';
}
