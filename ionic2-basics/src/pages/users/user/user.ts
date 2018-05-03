import { Component, OnInit } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit {
    name: string;

    constructor(private navParams: NavParams) { }

    ngOnInit() {
        // If we just pass a property
        // this.name = this.navParams.data;

        // If we pass an object, get property name
        this.name = this.navParams.get('userName');
    }
}
