import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-click-result',
  templateUrl: './click-result.component.html',
  styleUrls: ['./click-result.component.scss']
})
export class ClickResultComponent {


  trackOtherUrl = new Subject();

  onTrackOtherUrl(){
    this.trackOtherUrl.next("Ayush tomar");
  }
}
