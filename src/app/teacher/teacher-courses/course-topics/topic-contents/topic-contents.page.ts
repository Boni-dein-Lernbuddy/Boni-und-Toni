import {Component, OnInit} from '@angular/core';
import {AbstractTeacherMenuBaseComponent} from "../../../common/AbstractTeacherMenuBase.component";
import {MenuController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {FoldersMockService} from "../../../../commons/service/folders-mock.service";
import {Folder} from "../../../../commons/models/folder";

@Component({
    selector: 'app-topic-contents',
    templateUrl: './topic-contents.page.html',
    styleUrls: ['./topic-contents.page.scss'],
})
export class TopicContentsPage extends AbstractTeacherMenuBaseComponent implements OnInit {

    course: Folder;
    topic: Folder;

    constructor(menu: MenuController, private route: ActivatedRoute, private mock: FoldersMockService) {
        super(menu);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const courseId = +params['courseId'];
            const topicId = +params['topicId'];
            this.course = this.topic = this.mock.getFolderStructure().children.filter(child => child.id == courseId)[0];
            this.topic = this.course.children.filter(child => child.id == topicId)[0];
        });
    }

    updateState(state) {
        // TODO implement
    }

    addFeed() {
        //TODO implement
    }

}
