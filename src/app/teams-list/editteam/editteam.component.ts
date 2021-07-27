import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/team.service';
import { TeamsListComponent } from '../teams-list.component';

@Component({
  selector: 'app-editteam',
  templateUrl: './editteam.component.html',
  styleUrls: ['./editteam.component.css']
})
export class EditteamComponent implements OnInit {

  id: number | any;
  header: string | undefined;
  router: any;
  client: any;
 
  editteam = new FormGroup({

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    password: new FormControl(''),
    status: new FormControl('')

  })

  constructor(public teamservice:TeamService, private route :ActivatedRoute) { }

  ngOnInit(): void {

    this.teamservice.getteamID(this.route.snapshot.params.id).subscribe((result)=>{

      console.log("result" +  result);
      console.log("result" +  result['firstName']);

     this.editteam = new FormGroup({

      firstName: new FormControl(result['firstName']),
      lastName: new FormControl(result['lastName']),
      email: new FormControl(result['email']),
      contact: new FormControl(result['contact']),
      password: new FormControl(result['password']),
      status: new FormControl(result['status'])
    
      })
     
  
    })
  }

  updateTeamInfo(){
    
    
    
    this.teamservice.update(this.route.snapshot.params.id,this.editteam.value).subscribe(data =>{
     
      console.log("data"+data);

      alert("Update");
      window.location.reload();
      
      
      
  
   });
  }



}
