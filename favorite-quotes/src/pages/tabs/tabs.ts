import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@IonicPage()
@Component({
    selector: 'page-tabs',
    template: `
        <!-- <ion-tabs selectedIndex="1"> -->
        <ion-tabs>
            <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
            <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}
