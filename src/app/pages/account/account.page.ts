import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRouterOutlet, ModalController } from '@ionic/angular';
import { LocalPage } from '../local/local.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20)

  constructor(
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet) 
    {

    }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Cargando nuevos registros');

      const nuevoArr = Array(20)
      this.data.push( ...nuevoArr )
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: LocalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

}
