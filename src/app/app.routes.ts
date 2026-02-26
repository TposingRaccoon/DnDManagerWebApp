import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Register } from './features/register/register';
import { List } from './features/Character/list/list';
import { Creation } from './features/Character/creation/creation';
import { Levelup } from './features/Character/levelup/levelup';
import { Details } from './features/Character/details/details';
import { loginGuard } from './core/guards/login-guard';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:"login", component:Login},
    {path:"register", component:Register},
    {path:"list", component:List/*, canActivate: [loginGuard]*/},
    {path:"creation", component:Creation},
    {path:"levelup", component:Levelup},
    {path:"details", component:Details},
    {path:"register", component:Register},

];
