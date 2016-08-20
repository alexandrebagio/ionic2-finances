import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/modal-contas/modal-contas.html',
})
export class ModalContasPage {

  constructor(view: ViewController, params:NavParams) {
    this['view'] = view;
    this['conta'] = params.get("parametro") || {descricao: ''};
  }

  cancel() {
    this['view'].dismiss();
  }

  salvar() {
    this['view'].dismiss(this['conta']);
  }

}
