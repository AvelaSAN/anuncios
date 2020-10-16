import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FolderPage,
    children: [    
      {
        path: 'account',
        loadChildren: () => import('../pages/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('../pages/calls/calls.module').then( m => m.CallsPageModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('../pages/inbox/inbox.module').then( m => m.InboxPageModule)
      }
    ]
  },
  {
    path: '',
    component: FolderPage,
    redirectTo: 'tabs/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
