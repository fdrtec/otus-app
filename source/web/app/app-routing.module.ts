import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './utils';
import {CreateAccountComponent} from './components/account/create-account/create-account.component';
import {LoginComponent} from './components/account/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TasksComponent} from './components/dashboard/tasks/tasks.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {RecoveryPasswordComponent} from "./components/account/recovery-password/recovery-password.component";
import {ProjectContactComponent} from './components/project-contact/project-contact.component';
import {MessagesComponent} from './components/project-contact/messages/messages.component';
import {ExamResultsComponent} from './components/exam-results/exam-results.component'



const routes: Routes = [
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
    path: 'register-password/:token' ,
    component: CreateAccountComponent
  },
  {
    path: 'recovery-password',
    component: RecoveryPasswordComponent
  },

  {
    path: 'project-contact',
    component: ProjectContactComponent,
    canActivate: [AuthGuard]
  },

 {
    path: 'exam-results',
    component: ExamResultsComponent
  },
  {
    path: 'project-contact/:id/messages',
    component:MessagesComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tasks',
        component: TasksComponent
      }
    ]
  },

  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
