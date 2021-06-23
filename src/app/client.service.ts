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

  create(c:Client) {
     
    //const headers = { 'content-type': 'application/json'}  
     const body=JSON.stringify(c);
     console.log('project'+body)
    return this.httpClient.post(this.apiServer + '/save', body);
    
  }
}
