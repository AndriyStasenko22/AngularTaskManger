import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {MatButtonModule,MatInputModule} from '@angular/material';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        MatButtonModule, MatInputModule
    ],
    declarations: [
        LoginComponent,
    ]
})
export class LoginModule {
}
