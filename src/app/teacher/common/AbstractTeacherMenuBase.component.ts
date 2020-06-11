import {MenuController} from "@ionic/angular";

export const TEACHER_MENU_ID = 'teacher-menu'

export abstract class AbstractTeacherMenuBaseComponent {

    protected constructor(private menu: MenuController) {
    }

    openMenu() {
        this.menu.open(TEACHER_MENU_ID)
            .then(() => {
            })
            .catch(error => console.error(error));
    }

    closeMenu() {
        this.menu.close(TEACHER_MENU_ID)
            .then(() => {
            })
            .catch(error => console.error(error));
    }
}
