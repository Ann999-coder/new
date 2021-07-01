import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  closeResult = '';
  client:Client[] | undefined;
  clnt = {

    company: '',
    website: '',
    contact: '',
    email: '',
    userName: '',
    password: ''

    };

  constructor(public clientservice:ClientService,private modalService: NgbModal) { }

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

  //onSubmit(form:NgForm){

    //console.log(form.value);
  
    //this.clientservice.create(form.value).subscribe(data =>{console.log("data"+ data);});
  //}

  createClient(): void {

    const data = {
      
      company: this.clnt.company,
      website: this.clnt.website,
      contact: this.clnt.contact,
      email: this.clnt.email,
      userName: this.clnt.userName,
      password: this.clnt.password
  
    };
    this.clientservice.create(data)
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
    this.clientservice.delete(id).subscribe( data =>{
    });
    
  }
  

  getAll(): void {
    this.clientservice.getClientAll().subscribe(client => this.client= client);
 }

}
