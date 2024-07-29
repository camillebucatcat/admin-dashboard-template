import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  {
    path: "",
    component: MainComponent,

    children: [
      { path: 'my-task/dashboard', loadChildren: () => import('./pages/main/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'my-task/processing', loadChildren: () => import('./pages/main/processing/processing.module').then(m => m.ProcessingModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
