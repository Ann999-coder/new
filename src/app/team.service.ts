import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  team:Team[] | undefined;
  private apiServer = "http://localhost:8090/team";

  constructor(private httpClient: HttpClient) { }

  create(t:Team) {
     
    //const headers = { 'content-type': 'application/json'}  
     const body=JSON.stringify(t);
     console.log('project'+body)
    return this.httpClient.post(this.apiServer + '/save', body);
    
  }
}
