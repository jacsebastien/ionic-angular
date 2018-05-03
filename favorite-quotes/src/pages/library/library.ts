import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { QuotesCategory } from '../../app/shared/interfaces/quote-category.interface';
import quotes from '../../assets/data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
    selector: 'page-library',
    templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
    quotesCollection: QuotesCategory[];
    quotesPage = QuotesPage;

    ngOnInit() {
        this.quotesCollection = quotes;
    }
}
