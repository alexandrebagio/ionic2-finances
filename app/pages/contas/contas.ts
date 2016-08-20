import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {DAOContas} from '../../dao/dao-contas';
import {ModalContasPage} from '../modal-contas/modal-contas';


@Component({
  templateUrl: 'build/pages/contas/contas.html'
})

export class ContasPage {

  constructor(private modalController : ModalController){
    this['dao'] = new DAOContas();
    this['listContas'] = this['dao'].getList();
  }

  insert() {
    let modal = this.modalController.create(ModalContasPage);
    modal.onDidDismiss((data) => {
      this['dao'].insert(data);
    });
    modal.present();
  }

  edit(conta) {
    let modal = this.modalController.create(ModalContasPage, {parametro: conta});
    modal.onDidDismiss((data) => {
      this['dao'].edit(data);
    });
    modal.present();
  }

  delete(conta) {
    this['dao'].delete(conta);
  }
}