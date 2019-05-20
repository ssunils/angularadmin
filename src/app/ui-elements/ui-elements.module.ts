import { NgModule } from '@angular/core';
import { UiElementsComponent } from './ui-elements.component';
import { UiElementsRoutingModule } from './ui-elements-routing/ui-elements-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {ChartsModule} from 'ng2-charts';
@NgModule({
  imports: [
    UiElementsRoutingModule, ChartsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [ UiElementsComponent  ],
  providers: []
})
export class UiElementsModule { }
