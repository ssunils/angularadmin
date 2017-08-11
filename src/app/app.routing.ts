import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankTemplateComponent } from './template/blank-template.component';
import { LeftNavTemplateComponent } from './template/left-nav-template.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: '',
    component: LeftNavTemplateComponent,
    data: {
        title: 'Angular 4 Admin Template'
    },
    children: [
        {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule',
            data: {
                title: 'Dashboard Page'
            },
        },
        {
            path: 'ui-elements',
            loadChildren: './ui-elements/ui-elements.module#UiElementsModule',
            data: {
                title: 'UI Elements'
            },
        },
        {
            path: 'forms',
            loadChildren: './forms/forms.module#FormsModule',
            data: {
                title: 'Form Page'
            },
        }
    ]
}, {
    path: 'tables',
    component: LeftNavTemplateComponent,
    data: {
        title: 'Tables'
    },
    children: [
        {
            path: '',
            loadChildren: './tables/tables.module#TablesModule'
        }
    ]
}, {
    path: "**",
    component: PageNotFoundComponent
}];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
