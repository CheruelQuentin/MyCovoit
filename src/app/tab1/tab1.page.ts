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
  positionAct: string;
  ouSeRendre: string;
  dateDeb: string;
  heureDepa: string;
  nbPassager: string;


  addFirestore() {
    this.firestore.collection('Trajet').add({
        PositionActuelle: this.positionAct,
        ouSeRendre: this.ouSeRendre,
        dateDeb: this.dateDeb,
        heureDepart: this.heureDepa,
        nbPassager: this.nbPassager,

      });
  }

}
