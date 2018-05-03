import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { QuotesCategory } from '../../app/shared/interfaces/quote-category.interface';

@IonicPage()
@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
    quotesCategory: QuotesCategory

    constructor(private navParams: NavParams) { }

    // ionViewDidLoad() {
    //     this.quotesCategory = this.navParams.data;
    //      Add elvis operator (?) in template to use this approach
    // }

    ngOnInit() {
        this.quotesCategory = this.navParams.data;
    }
}
