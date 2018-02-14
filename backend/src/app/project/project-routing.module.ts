import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProjectListComponent} from "./project-list.component";
import {ProjectFormComponent} from "./project-form.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Проекты'
        },
        children: [
            {
                path: 'list',
                component: ProjectListComponent,
                data: {
                    title: 'Список',
                }
            },
            {
                path: 'create',
                component: ProjectFormComponent,
                data: {
                    title: 'Создать'
                }
            },
            {
                path: ':id',
                component: ProjectFormComponent,
                data: {
                    title: 'Редактировать'
                }
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule{}
