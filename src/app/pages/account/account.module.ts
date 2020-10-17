import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { ComponentsModule } from '../../components/components.module';
import { LocalPage } from '../local/local.page';
import { LocalPageModule } from '../local/local.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    ComponentsModule,
    LocalPageModule
  ],
  declarations: [AccountPage],
  entryComponents: [
    LocalPage
  ]
})
export class AccountPageModule {}
