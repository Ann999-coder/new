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

  create(data: { firstName: string; lastName: string; email: string; contact: string; password: string; status: string;  }): Observable<any> {
  
    return this.httpClient.post(this.apiServer + '/save', data);

  }

  getteamID(id : number){

    return this.httpClient.get<Team>(this.apiServer +'/edit/'+id)
  }

  delete(id :number){
 
    console.log("id"+id)
    return this.httpClient.delete<Team>(this.apiServer + '/delete/' + id,)
   
  }

  update(id: number ,data: any){

    return this.httpClient.put(this.apiServer +'/update/' + id,data)
  }

  getTeamAll(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.apiServer +"/all" )
    
  }
}
