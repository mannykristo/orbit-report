import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];
  Url: string = 'https://handlers.education.launchcode.org/static/satellites.json';

  constructor() {
   this.sourceList = [];
   window.fetch(this.Url).then(function(response) {
      response.json().then(function(data) {
        let satellites = data.satellites;
        for(let i=0; i < satellites.length; i++) {
          let satellite = new Satellite(satellites[i].name, satellites[i].type, satellites[i].launchDate, satellites[i].orbitType, satellites[i].operational);
          this.sourceList.push(satellite);
        }
      }.bind(this));
    }.bind(this));
  }
}
