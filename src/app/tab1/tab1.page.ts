import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private http: Http) {
  }

  sendSlackMessage() {
    const url = 'https://hooks.slack.com/services/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';
    const messageText = {
        'text': 'Testing Message from Ionic Application'
      };
    return this.http.post(url, messageText)
      .subscribe(res => {
        alert('Message successfully posted');
      }, error => {
        alert('Failed to post message');
      });
  }
}
