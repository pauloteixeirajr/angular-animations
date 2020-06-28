import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { NewFeaturesComponent } from './new-features/new-features.component';

const appRoutes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'new_feat', component: NewFeaturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
