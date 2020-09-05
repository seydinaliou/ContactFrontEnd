import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
infos={
  nom:"Fall",
  prenom:"Aliou",
  email:"fseydina5@gmail.com"
}
  constructor() { }

  ngOnInit() {
  }

}
