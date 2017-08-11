import { TablesComponent } from './../tables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: TablesComponent,
    data: {
      title: 'Tables Works'
    }
  },{
    path: 'subpage',
    pathMatch: 'full',
    component: TablesComponent,
    data: {
      title: 'Subpage Tables Works'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
