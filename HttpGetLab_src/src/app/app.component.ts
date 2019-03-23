import { Component } from '@angular/core';

// import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  dataFromServer: any;
  
  constructor () {
    $.get("/assets/JsonOnServer.txt", function (e) {
      $("#debug").text(e);
      console.log(JSON.parse(e));
      this.dataFromServer = JSON.parse(e);
    })
  }

  // constructor(private http: Http) { 
  //   this.http
  //     .get('/assets/JsonOnServer.txt')
  //     .toPromise()
  //     .then(response => {
  //       this.dataFromServer = response.json();
  //     });
  // } // end ofconstructor

}
