import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { SelectServerComponent } from './views/pages/select-server/select-server.component';

const routes: Routes = [
  {
    path: 'select-server',
    component: SelectServerComponent,
  },
  {
    path: '',
    redirectTo: '/select-server',
    pathMatch: 'full',
  },
  {
    path: 'login/:api',
    component: LoginComponent,
  },
  {
    path: 'view/:userId',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
