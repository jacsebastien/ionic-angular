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

    ionViewCanEnter(): boolean | Promise<boolean> {
        console.log('ionViewCanEnter');
        // const rnd = Math.random();
        // return rnd > 0.5;
        return true;
    }

    // Only called when the page is pushed to the stack
    ionViewDidLoad() {
        console.log('ionViewDidLoad');
    }

    ionViewWillEnter() {
        console.log('ionViewWillEnter');

    }

    ionViewDidEnter() {
        console.log('ionViewDidEnter');

    }

    ionViewCanLeave(): boolean | Promise<boolean> {
        console.log('ionViewCanLeave');
        const promise: Promise<boolean> = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });

        return promise;
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
    }

    ionViewDidLeave() {
        console.log('ionViewDidLeave');
    }

    // Only called when the page is popped from the stack
    ionViewWillUnload() {
        console.log('ionViewWillUnload');
    }
}
