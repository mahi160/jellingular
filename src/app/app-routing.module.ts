import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { SelectServerComponent } from './views/pages/select-server/select-server.component';

const routes: Routes = [
  {
    path: 'login/:api',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/select-server',
    pathMatch: 'full',
  },
  {
    path: 'select-server',
    component: SelectServerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
