import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ContasPage} from './pages/contas/contas';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  rootPage: any = ContasPage;

  constructor(platform: Platform) {
    this['home'] = HomePage;
    this['contas'] = ContasPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(opcao) {
    this['rootPage'] = opcao;
  }
}

ionicBootstrap(MyApp);
