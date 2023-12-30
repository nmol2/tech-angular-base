import { Routes } from '@angular/router';

export enum AppRoutes{
    DEFAULT= '',
    LOGIN= 'login',
    FORGOT_PASSWORD= 'forgot-password',
    CHAGE_PASSWORD= 'change-password',
    REGISTER= 'register'
}

export const routes: Routes = [
    // {
    //     path: AppRoutes.DEFAULT, 
    //     component: FirstComponent,
    // },
    {
        path: AppRoutes.LOGIN, 
        loadComponent: () => import('./features/authorisation/pages/login/login.component').then(mod=>mod.LoginComponent)
    },
    {
        path: AppRoutes.REGISTER, 
        loadComponent: () => import('./features/authorisation/pages/register/register.component').then(mod=>mod.RegisterComponent)
    },
    {
        path: AppRoutes.FORGOT_PASSWORD, 
        loadComponent: () => import('./features/authorisation/pages/forgot-password/forgot-password.component').then(mod=>mod.ForgotPasswordComponent)
    },
    {
        path: AppRoutes.CHAGE_PASSWORD, 
        loadComponent: () => import('./features/authorisation/pages/change-password/change-password.component').then(mod=>mod.ChangePasswordComponent)
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    // {
    //     path: '**', 
    // }
];
