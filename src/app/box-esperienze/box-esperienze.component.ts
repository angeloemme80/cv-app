import { Component, OnInit } from '@angular/core';
import { Esperienze } from "./esperienze.model";
import { EsperienzeService } from "./esperienze.service";
  
@Component({
  selector: 'app-box-esperienze',
  templateUrl: './box-esperienze.component.html',
  styleUrls: ['./box-esperienze.component.css']
})
export class BoxEsperienzeComponent implements OnInit {

  esperienze: Esperienze[] = [];
  esperienzeService: EsperienzeService;

  constructor(esperienzeService: EsperienzeService) {
    this.esperienzeService = esperienzeService;
  }

  ngOnInit() {
    this.showEsperienze();
  }

  showEsperienze() {
    this.esperienzeService.getEsperienze()
      .subscribe( (data: Esperienze[]) =>  {
        this.esperienze = data;
        //console.log(data);
      });
      
  }
  


}
