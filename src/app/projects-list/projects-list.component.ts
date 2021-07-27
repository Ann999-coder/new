import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../project';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  closeResult = '';
  project:Project[] | undefined;
  proj = {

    projectName: '',
    type: '',
    subject: ''

    };



  constructor(public projectservice:ProjectService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAll();
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //onSubmitt(form:NgForm){

    //console.log(form.value);
  
    //this.projectservice.create(form.value).subscribe(data =>{console.log("data"+ data);});
  //}

  createProject(): void {

    const data = {
      
      projectName: this.proj.projectName,
      type: this.proj.type,
      subject: this.proj.subject

    };
    this.projectservice.create(data)
      .subscribe(
        response => {
          
          if(response =="OK"){
            alert("Registration Successfull");
            window.location.reload();
            
          }

        },
        error => {
          console.log(error);
        });
  }

  delete(id : number):void
{
  this.projectservice.delete(id).subscribe( data =>{
  });
  window.location.reload();
  
}


  getAll(): void {
    this.projectservice.getProjectAll().subscribe(project => this.project = project);
 }


}
