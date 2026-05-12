import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClass } from '@angular/common';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { CustomerComponent } from './components/API/customer/customer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'dataBinding',
                component: DataBindingComponent
            },
            {
                path: 'ng-if',
                component: NgIfComponent
            },
            {
                path: 'ng-for',
                component: NgForComponent
            },
            {
                path: 'ng-class',
                component: NgClassComponent
            },
            {
                path: 'ng-style',
                component: NgStyleComponent
            },
            {
                path: 'template-form',
                component: TemplateFormComponent
            },
            {
                path: 'reactive-form',
                component: ReactiveFormComponent
            },
            {
                path: 'get-api',
                component: GetApiComponent
            },
            {
                path: 'post-api',
                component: PostApiComponent
            },
            {
                path: 'customer',
                component: CustomerComponent
            },
            {
                path: 'life-cycle',
                component: LifeCycleComponent
            }
        ]
    }
];
