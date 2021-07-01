import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../project';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  closeResult = '';
  team:Team[] | undefined;
  tm = {

    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    status: ''

    };

  constructor(public teamservice:TeamService,private modalService: NgbModal) { }

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
  
    //this.teamservice.create(form.value).subscribe(data =>{console.log("data"+ data);});
  //}

  createTeam(): void {

    const data = {
      
      firstName: this.tm.firstName,
      lastName: this.tm.lastName,
      email: this.tm.email,
      contact: this.tm.contact,
      password: this.tm.password,
      status: this.tm.status
  
    };
    this.teamservice.create(data)
      .subscribe(
        response => {
          
          if(response =="OK"){
            alert("Registration Successfull");
            
          }

        },
        error => {
          console.log(error);
        });
  }


  delete(id : number):void
  {
    this.teamservice.delete(id).subscribe( data =>{
    });
    
  }
  

  getAll(): void {
    this.teamservice.getTeamAll().subscribe(team => this.team= team);
 }


}
