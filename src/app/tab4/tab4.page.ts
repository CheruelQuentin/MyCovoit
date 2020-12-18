import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( 
    public afDB: AngularFireDatabase,
    public firestore: AngularFirestore
    )
    {
      this.trajet = firestore.collection('Trajet').valueChanges();

     }

  ngOnInit() {
    
  }
 
  trajet: Observable<any[]>;
  positionAct: string;
  ouSeRendre: string;
  dateDeb: string;
  heureDepa: string;
  nbPassager: string;


  addFirestore() {
    this.firestore.collection('Items').add({
        PositionActuelle: this.positionAct,
        ouSeRendre: this.ouSeRendre,
        dateDeb: this.dateDeb,
        heureDepart: this.heureDepa,
        nbPassager: this.nbPassager,

      });
  }

}
