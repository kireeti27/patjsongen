import { Component } from '@angular/core';
import { FormGroup, FormControl,FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  PatientDetails = new FormGroup({
    Name: new FormControl(''),
    MedicalRecordNumber : new FormControl(''),
    FinancialNumber : new FormControl(''),
    AdmitSource : new FormControl(''),
    Organisation : new FormControl(''),
    Building : new FormControl(''),
    NurseUnit :  new FormControl(''),
    Sex :  new FormControl(''),
    Race :  new FormControl(''),
    Age :  new FormControl(''),
    EncounterStatus :  new FormControl(''),
    EncounterType :  new FormControl('')
  });

  TransferDetails = new FormGroup({
    MedicalService :  new FormControl(''),
    Building :  new FormControl(''),
    NurseUnit :  new FormControl(''),
    RequestedAccommodation :  new FormControl(''),
    TransferReason :  new FormControl('')
  });
 
  VitalsAndLabs = new FormGroup({
    MAPInvasive : new FormControl(''),
    MAPInvasiveSec : new FormControl(''),
    MAPCuff : new FormControl(''),
    MAPAssisted : new FormControl(''),
    SBPNonInvasive : new FormControl(''),
    SBPAssisted : new FormControl(''),
    SBPInvasive : new FormControl(''),
    SBPInvasiveSec : new FormControl(''),
    SBPInvasivemmHg : new FormControl(''),
    DBPNonInvasive : new FormControl(''),
    DBPAssisted : new FormControl(''),
    DBPInvasive : new FormControl(''),
    DBPInvasivemmHg : new FormControl(''),
    DBPInvasiveSec : new FormControl(''),
    PulseRate : new FormControl(''),
    ApicalHeartRate : new FormControl(''),
    HRMonitored : new FormControl(''),
    HeartRate : new FormControl(''),
    HeartRatebpm : new FormControl(''),
    PerpheralPulse : new FormControl(''),
    RRTotal : new FormControl(''),
    RR : new FormControl(''),
    RRbrmin : new FormControl(''),
    TempAux : new FormControl(''),
    CoreTemp : new FormControl(''),
    TempOral : new FormControl(''),
    TempRectal : new FormControl(''),
    TempRectalF : new FormControl(''),
    TempTympanic : new FormControl(''),
    HCTPOC : new FormControl(''),
    PlateletCount : new FormControl(''),
    SodiumLevel : new FormControl('')
  })

}
