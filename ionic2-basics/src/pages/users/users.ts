import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@IonicPage()
@Component({
    selector: 'page-users',
    templateUrl: 'users.html',
})
export class UsersPage {
    constructor(private navCtrl: NavController) { }

    onLoadUser(userName: string) {
        // Pass a property to the page
        // this.navCtrl.push(UserPage, userName);

        // Pass an object which can contain multiple properties
        this.navCtrl.push(UserPage, {userName: userName});
    }
}
