import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherCoursesPage } from './teacher-courses.page';

describe('TeacherCoursesPage', () => {
  let component: TeacherCoursesPage;
  let fixture: ComponentFixture<TeacherCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
