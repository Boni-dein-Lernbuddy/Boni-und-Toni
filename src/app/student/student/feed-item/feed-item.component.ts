import {Component, Input, OnInit} from '@angular/core';
import {FeedItem} from "../../../commons/models/feed-item";

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  @Input()
  item: FeedItem;

  constructor() { }

  ngOnInit() {}

}
