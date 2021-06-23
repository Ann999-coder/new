import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './projects-list/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddClientComponent,
    AddProjectComponent,
    AddTeamComponent,
    ClientsListComponent,
    ProjectsListComponent,
    TeamsListComponent,
    EditComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
