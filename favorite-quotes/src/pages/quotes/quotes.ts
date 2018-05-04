import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

import { QuotesCategory } from '../../app/shared/interfaces/quote-category.interface';
import { Quote } from '../../app/shared/interfaces/quote.interface';

@IonicPage()
@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
    quotesCategory: QuotesCategory

    constructor(
        private navParams: NavParams,
        private alertCtrl: AlertController
    ) { }

    // ionViewDidLoad() {
    //     this.quotesCategory = this.navParams.data;
    //      Add elvis operator (?) in template to use this approach
    // }

    ngOnInit() {
        this.quotesCategory = this.navParams.data;
    }

    onAddToFavorite(selQuote: Quote) {
        // create an ionic alert
        const alert = this.alertCtrl.create({
            title: "Add Quote",
            subTitle: "To favorites",
            message: "Are you sure you want to add the quote to your favorites ?",
            buttons: [
                {
                    text: "Yes",
                    handler: () => {
                        console.log('OK');
                    }
                }, {
                    text: "No",
                    role: "cancel", // if the alert is dissmissed (by clicking outside the alert or in the "No" button) use the handler
                    handler: () => {
                        console.log('Cancel');
                    }
                }
            ]
        });
        // Show the alert to the user
        alert.present();
    }
}
