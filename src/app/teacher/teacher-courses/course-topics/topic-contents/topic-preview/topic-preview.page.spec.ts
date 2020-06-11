import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicPreviewPage } from './topic-preview.page';

describe('TopicPreviewPage', () => {
  let component: TopicPreviewPage;
  let fixture: ComponentFixture<TopicPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
