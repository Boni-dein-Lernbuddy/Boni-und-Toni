import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicContentsPage } from './topic-contents.page';

describe('TopicContentsPage', () => {
  let component: TopicContentsPage;
  let fixture: ComponentFixture<TopicContentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicContentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicContentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
