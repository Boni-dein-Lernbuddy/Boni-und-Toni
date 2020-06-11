import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoldersMockService} from "../../../commons/service/folders-mock.service";
import {Folder} from "../../../commons/models/folder";
import {AbstractTeacherMenuBaseComponent} from "../../common/AbstractTeacherMenuBase.component";
import {MenuController} from "@ionic/angular";

@Component({
    selector: 'app-course-topics',
    templateUrl: './course-topics.page.html',
    styleUrls: ['./course-topics.page.scss'],
})
export class CourseTopicsPage extends AbstractTeacherMenuBaseComponent implements OnInit {

    course: Folder

    constructor(menu: MenuController, private route: ActivatedRoute, private mock: FoldersMockService) {
        super(menu);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const courseId = +params['courseId'];
            this.course = this.mock.getFolderStructure().children.filter(child => child.id == courseId)[0];
        });
    }

    addTopic() {
        //TODO implement
    }
}
