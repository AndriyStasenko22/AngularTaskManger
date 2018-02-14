import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule, MatButtonModule, MatMenuModule} from '@angular/material';

import {ProjectListComponent} from './project-list.component';
import {ProjectFormComponent} from "./project-form.component";
import {ProjectRoutingModule} from "./project-routing.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ProjectRoutingModule,
        MatTableModule,
        MatIconModule, MatButtonModule, MatMenuModule
    ],
    declarations: [
        ProjectListComponent,
        ProjectFormComponent]
})
export class ProjectModule {
}
