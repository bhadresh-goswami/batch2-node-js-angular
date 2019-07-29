import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../Services/info.service';

@Component({
  selector: 'app-infolist',
  templateUrl: './infolist.component.html',
  styleUrls: ['./infolist.component.css']
})
export class InfolistComponent implements OnInit {

  infoArr = [];
  constructor(private infoServ: InfoService) { 
    infoServ.getInformation().subscribe((data: any) => { 
      this.infoArr = data as [];
      console.log(this.infoArr);
    });
  }

  ngOnInit() {

  }

}
