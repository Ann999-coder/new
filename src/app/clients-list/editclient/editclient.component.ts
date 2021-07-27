import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {

  id: number | any;
  header: string | undefined;
  router: any;
  client:any;

  editclient = new FormGroup({
    company: new FormControl(''),
    website: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
   userName: new FormControl(''),
     password: new FormControl('')

  })
  
  constructor(public clientservice:ClientService, private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.clientservice.getclientByID(this.route.snapshot.params.id).subscribe((result)=>{

      console.log("result" +  result);
      console.log("result" +  result['company']);

     this.editclient = new FormGroup({

      company: new FormControl(result['company']),
      website: new FormControl(result['website']),
      contact: new FormControl(result['contact']),
      email: new FormControl(result['email']),
      userName: new FormControl(result['userName']),
      password: new FormControl(result['password'])
    
      })
     
  
    })
  }

  updateClientInfo(){
    
    
    
    this.clientservice.update(this.route.snapshot.params.id,this.editclient.value).subscribe(data =>{
     
      console.log("data"+data);

      alert("Update");
      window.location.reload();
      
  
   });
  }


}
