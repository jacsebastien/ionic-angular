import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    // Get a reference to UsersPage for template navigation
    usersPage = UsersPage;

    // constructor(public navCtrl: NavController) { }

    // onGoToUsers() {
    //     // Push new page on top of the stack to show it in place of current page
    //     this.navCtrl.push(UsersPage);
    // }

}
