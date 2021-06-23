import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { EditComponent } from './projects-list/edit/edit.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
                        { path: 'clients', component: ClientsListComponent },
                        { path: 'project', component: ProjectsListComponent },
                        { path: 'teams', component: TeamsListComponent },
                        { path: 'addclient', component: AddClientComponent },
                        { path: 'addproject', component: AddProjectComponent },
                        { path: 'addteam', component: AddTeamComponent },
                        {path:'project/edit/:id',component:EditComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
