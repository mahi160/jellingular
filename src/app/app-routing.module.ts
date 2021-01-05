import { FolderComponent } from './views/pages/folder/folder.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'view',
    component: HomeComponent,
  },
  {
    path: 'folder/:folderId',
    component: FolderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
