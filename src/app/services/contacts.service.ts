import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs/add/operator/map"
import {Contact} from '../../model/model.contact';
import {Observable} from 'rxjs';
@Injectable()
export class ContactsService {

  constructor(public http:HttpClient){
  }
  getContactList(){
    return this.http.get("http://localhost:8080/contacts");
  }
  getContacts(motCle:String,page:number,size:number){
    return  this.http.get("http://localhost:8080/chercherContacts?mc="
      +motCle+"&page="+page+"&size="+size);
  }
  saveContact(contact:Contact){
    return  this.http.post("http://localhost:8080/contacts",contact);
  }
  getContact(id:number){
    return  this.http.get("http://localhost:8080/contacts/"+id);
  }

  updateContact(id:number,contact:Contact){
    return  this.http.put("http://localhost:8080/edit/"+contact.id,contact);
  }

  deleteContact(id:number) {
    return  this.http.delete("http://localhost:8080/delete/"+id);
  }
}
