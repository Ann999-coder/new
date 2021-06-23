import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Project } from './project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project:Project[] | undefined;


  private apiServer = "http://localhost:8090/project";

  constructor(private httpClient: HttpClient) {}
    create(p:Project) {
     
      const headers = { 'content-type': 'application/json'}  
       const body=JSON.stringify(p);
       console.log('project'+body)
      return this.httpClient.post(this.apiServer + '/save', body);
      
    }
   
    getprojectByID(id : number){

      return this.httpClient.get<Project>(this.apiServer +id)
    }

    delete(id :number){
   
      console.log("id"+id)
      return this.httpClient.delete<Project>(this.apiServer + '/delete/' + id,)
     
    }

    //update(id ,data){

      //return this.httpClient.put(this.apiServer + id+ '/update' +,data)
    //}

    getProjectAll(): Observable<Project[]> {
      return this.httpClient.get<Project[]>(this.apiServer +"/all" )
      
    }
    errorHandler(errorHandler: any): import("rxjs").OperatorFunction<Project[], any> {
      throw new Error('Method not implemented.');
    }

  

}
