import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( 
    public afDB: AngularFireDatabase,
    public firestore: AngularFirestore
    )
    {
      this.trajets = firestore.collection('Trajet').valueChanges();

     }

  ngOnInit() {
    
  }
 
  trajets: Observable<any[]>;
  TraLieuDepart: string;
  TraLieuArriver: string;
  dateDeb: string;
  TraHeureDepart: string;
  TraNbPassager: string;


  addFirestore() {
    this.firestore.collection('Trajets').add({
        TraLieuDepart: this.TraLieuDepart,
        TraLieuArriver: this.TraLieuArriver,
        dateDeb: this.dateDeb,
        TraHeureDepart: this.TraHeureDepart,
        TraNbPassager: this.TraNbPassager,

      });
  }

}
