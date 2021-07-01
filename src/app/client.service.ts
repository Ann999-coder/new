import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Client } from './client';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  client:Client[] | undefined;
  private apiServer = "http://localhost:8090/client";

  constructor(private httpClient: HttpClient) { }

  //create(c:Client) {
     
    //const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(c);
     //console.log('project'+body)
    //return this.httpClient.post(this.apiServer + '/save', body);
    
  //}

  create(data: { company: string; website: string; contact: string; email: string; userName: string; password: string;}): Observable<any> {
  
    return this.httpClient.post(this.apiServer + '/save', data);

  }

  getclientByID(id : number){

    return this.httpClient.get<Client>(this.apiServer +'/edit/'+id)
  }

  delete(id :number){
 
    console.log("id"+id)
    return this.httpClient.delete<Client>(this.apiServer + '/delete/' + id,)
   
  }

  update(id: number ,data: any){

    return this.httpClient.put(this.apiServer +'/update/' + id,data)
  }

  getClientAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.apiServer +"/all" )
    
  }
}
