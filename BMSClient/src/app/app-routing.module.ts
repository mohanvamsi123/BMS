import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserComponent } from './admin-user/admin-user.component';

const routes: Routes = [
  {
    path: 'Admin',
    component: AdminComponent,
    children:[
      
    ]
  },
  {
    path: 'Admin/AdminConfiguration',
    component: AdminUserComponent,

  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
