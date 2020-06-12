import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-from-boni',
  templateUrl: './msg-from-boni.component.html',
  styleUrls: ['./msg-from-boni.component.scss'],
})
export class MsgFromBoniComponent {
  /** A friendly message from Boni. (*Safe* HTML elements are allowed.) */
  @Input()
  msg: string;
}
