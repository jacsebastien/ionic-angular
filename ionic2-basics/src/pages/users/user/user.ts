import { Component, OnInit } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    name: string;

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        // If we just pass a property
        // this.name = this.navParams.data;

        // If we pass an object, get property name
        this.name = this.navParams.get('userName');
    }

    onGoBack() {
        // remove the top most page (the actual page) and so get back to the previous one
        // this.navCtrl.pop();

        // remove all pages on the stack excepts the root page
        this.navCtrl.popToRoot();
    }
}
