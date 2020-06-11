import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseTopicsPage } from './course-topics.page';

describe('CourseTopicsPage', () => {
  let component: CourseTopicsPage;
  let fixture: ComponentFixture<CourseTopicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTopicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseTopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
