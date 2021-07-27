import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { ProjectsListComponent } from '../projects-list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number | any;
  header: string | undefined;
  router: any;
  project: any;
 
  edit = new FormGroup({

    projectName: new FormControl(''),
    type: new FormControl(''),
    subject: new FormControl('')

  })
  

  constructor(public projectservice:ProjectService, private route :ActivatedRoute) { }

  ngOnInit(): void {

    this.projectservice.getprojectByID(this.route.snapshot.params.id).subscribe((result)=>{

      console.log("result" +  result);
      console.log("result" +  result['projectName']);

     this.edit = new FormGroup({

      projectName: new FormControl(result['projectName']),
        type: new FormControl(result['type']),
        subject: new FormControl(result['subject'])
    
      })
     
  
    })
  }

  updateProjectInfo(){
    
    
    
    this.projectservice.update(this.route.snapshot.params.id,this.edit.value).subscribe(data =>{
     
      console.log("data"+data);

      alert("Update");
      window.location.reload();
      
  
   });
  }

}
