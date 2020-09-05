import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs/add/operator/map";
import {ContactsService} from '../services/contacts.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Contact} from '../../model/model.contact';
import {Observable} from 'rxjs';
import {NotificationService} from '../services/notification.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContact:any;
  motCle:String="";
  size:number=8;
  currentPage:number=0;
  pages:Array<number>;

  constructor(private http:HttpClient,public contactservice:ContactsService,
              public notificationService:NotificationService,private router:Router) {
  }

    ngOnInit() {
    this.chercher();
    }

    doSearch(){
      this.contactservice.getContacts(this.motCle,this.currentPage,this.size)
        .subscribe((data: any)=>{
          this.pageContact=data;
          this.pages=new Array(data.totalPages);
        },err=>{
          console.log(err);
        })
  }
  chercher(){
    this.doSearch();
  }
  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

  onEditContact(id:number){
    this.router.navigate(['editContact',id]);
  }
  onDeleteContact(c:Contact) {
    if (confirm('Are you sure to delete this record ?' + c.prenom + " " + c.nom)) {
      this.contactservice.deleteContact(c.id)
        .subscribe(
          data => {
            console.log(data);
            this.chercher();
          },
          error => console.log(error));
      this.notificationService.warn('! Deleted successfully');
    }
  }
}
