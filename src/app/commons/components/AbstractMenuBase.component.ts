import { MenuController } from '@ionic/angular';

export const TEACHER_MENU_ID = 'teacher-menu';
export const STUDENT_MENU_ID = 'student-menu';

export type MenuId = typeof TEACHER_MENU_ID | typeof STUDENT_MENU_ID;

export abstract class AbstractMenuBaseComponent {

    protected constructor(
        private controller: MenuController,
        private id: MenuId
    ) { }

    openMenu() {
        this.controller.open(this.id)
            .then(() => { })
            .catch(error => console.error(error));
    }

    closeMenu() {
        this.controller.close(this.id)
            .then(() => { })
            .catch(error => console.error(error));
    }
}
