import {Component} from '@angular/core';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
      this['nome'] = 'teste';
  }

  getNome() {
      return 'MSG: '+ this['nome'];
  }
}
