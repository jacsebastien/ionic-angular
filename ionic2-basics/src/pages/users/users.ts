import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@IonicPage()
@Component({
    selector: 'page-users',
    templateUrl: 'users.html',
})
export class UsersPage {
    userPage = UserPage;

    constructor(private navCtrl: NavController) { }

    onLoadUser(userName: string) {
        // Pass a property to the page
        // this.navCtrl.push(UserPage, userName);

        // Pass an object which can contain multiple properties and add animations options
        this.navCtrl.push(UserPage, {userName: userName}), {
            direction: 'back', // default for push is 'forward'
            duration: 2000, // 2 seconds
            easing: 'ease-out'
        };
    }
}
