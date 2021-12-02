import { Component } from '@angular/core';
import {Contact} from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contact: Contact=new Contact("","","");
  public contacts: Contact[]=[];
  public activeContact: Contact|null=null;
  addContact(){
    if(this.contact.name && this.contact.contactType && this.contact.contactValue){
    this.contacts.push(this.contact);
    this.contact=new Contact("","","");
    }
   }
  changeContact(contact:Contact){
    this.activeContact=contact;
  }
  delateContact(contact:Contact){
    this.contacts=this.contacts.filter(c=>c!=contact);
  }
}


