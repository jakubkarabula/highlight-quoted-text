import { Component } from '@angular/core';

interface IFormData {
  searchTerm: string;
  caseSensitive: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData: IFormData = {
    searchTerm: 'That wonderful Person of Sparta',
    caseSensitive: 'sensitive',
  };

  testText = 'I am a variable from component\'s class';
}
