import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'recipient',
    loadChildren: () => import('./pages/recipient/recipient.module').then(m => m.RecipientModule)
  },
  {
    path: 'deliver',
    loadChildren: () => import('./pages/deliver/deliver.module').then(m => m.DeliverModule)
  },
  {
    path: 'issue',
    loadChildren: () => import('./pages/issue/issue.module').then(m => m.IssueModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { DeliverListComponent } from './pages/deliver/deliver-list/deliver-list.component';
// import { HomeComponent } from './pages/home/home.component';
// import { IssueComponent } from './pages/issue/issue.component';
// import { OrderListComponent } from './pages/order/order-list/order-list.component';
// import { RecipientListComponent } from './pages/recipient/recipient-list/recipient-list.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'order', component: OrderListComponent },
//   { path: 'recipient', component: RecipientListComponent },
//   { path: 'deliver', component: DeliverListComponent },
//   { path: 'issue', component: IssueComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
