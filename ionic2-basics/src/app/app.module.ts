import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';

@NgModule({
    // Classic Angular declarations
    declarations: [
        MyApp,
        HomePage,
        UsersPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp) // Forms and Http are already included in IonicModule
    ],
    bootstrap: [IonicApp],
    // Allow Ionic to know pages to user and how to find it for rooting
    entryComponents: [
        MyApp,
        HomePage,
        UsersPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
