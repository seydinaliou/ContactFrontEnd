import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode:number=1;
idContact:number;
contact:Contact=new Contact();

  constructor(public activatedRoute:ActivatedRoute, public router:Router,
              public contactsService:ContactsService) {

  }

  ngOnInit() {
    this.idContact=this.activatedRoute.snapshot.params.id;
    this.contact=new Contact();
    this.contactsService.getContact(this.idContact)
      .subscribe((data:any)=>{
        this.contact=data;
      },err=>{
        console.log(err);
      })
  }

  updateContact(){
   this.contactsService.updateContact(this.idContact,this.contact)
     .subscribe(data => console.log(data), error => console.log(error));
       this.contact=new Contact();
       this.gotoList();
  }

  onSubmit() {
    this.updateContact();
  }
  gotoList() {
    this.router.navigate(['/contacts']);
  }

}
