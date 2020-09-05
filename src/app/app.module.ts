import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {HttpClientModule} from '@angular/common/http';
import { NewContactComponent } from './new-contact/new-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactsService} from './services/contacts.service';
import { MaterialModule } from './material/material.module';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PmComponent} from './pm/pm.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [ContactsService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
