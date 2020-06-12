import { Component, Input, OnInit } from '@angular/core';
import { FeedItem } from "../../../commons/models/feed-item";
import { LinkPreview } from 'src/app/commons/models/link-preview';
import { LinkPreviewService } from 'src/app/commons/service/link-preview.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  @Input()
  item: FeedItem;

  get itemAttachementFile(): string {
    return this.item.attachmentPath?.replace(/^.*[/]/, '');
  }

  linkPreview: LinkPreview;

  constructor(private linkPreviewService: LinkPreviewService) {  }

  ngOnInit() {
    if (this.item.type === 'link') {
      this.linkPreviewService.getLinkPreview(this.item.attachmentPath).subscribe((preview) => this.linkPreview = preview);
    }
  }

  public openLink(url: string) {
    window.open(url, '_blank');
  }
}
