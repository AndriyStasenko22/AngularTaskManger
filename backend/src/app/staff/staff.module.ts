import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule, MatButtonModule, MatMenuModule} from '@angular/material';

import {StaffListComponent} from './staff-list.component';
import {StaffFormComponent} from './staff-form.component';
import {StaffRoutingModule} from './staff-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        StaffRoutingModule,
        MatTableModule,
        MatIconModule, MatButtonModule, MatMenuModule
    ],
    declarations: [
        StaffListComponent,
        StaffFormComponent,
    ]
})
export class StaffModule { }
