import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { EditclientComponent } from './clients-list/editclient/editclient.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './projects-list/edit/edit.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { RegisterComponent } from './register/register.component';
import { EditteamComponent } from './teams-list/editteam/editteam.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
                        { path: 'client', component: ClientsListComponent },
                        { path: 'project', component: ProjectsListComponent },
                        { path: 'team', component: TeamsListComponent },
                        { path: 'addclient', component: AddClientComponent },
                        { path: 'addproject', component: AddProjectComponent },
                        { path: 'addteam', component: AddTeamComponent },
                        {path:'project/edit/:id',component:EditComponent},
                        {path:'client/edit/:id',component:EditclientComponent},
                        {path:'team/edit/:id',component:EditteamComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'register', component:RegisterComponent}
              
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
