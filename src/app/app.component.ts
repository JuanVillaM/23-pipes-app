import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  PI: number = Math.PI;
  
  salary: number = 1234.5;
  
  percentege: number = 0.234;
  
  name: string = 'Juan Villa';
 
  wrongName: string = 'jUaN vILLa MEndOzA';
  
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  date: Date = new Date();

  activate: boolean = true;

  urlVideo: string = 'https://www.youtube.com/embed/pyg-DYm7b0A';

  language: string = 'es';
  
  hero = {
    name: 'Logan',
    heroName: 'Wolverine',
    age: 500,
    direction: {
      avenue: 'Fortnite',
      house: 69
    }
  }

  promiseValue = new Promise<string>( ( resolve ) => {
    setTimeout(() => {
      resolve('The data arrived!');
    }, 4500);
  })
}
