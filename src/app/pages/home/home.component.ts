import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info = [];
  constructor(private infoServ: InfoService) { 

    this.infoServ.getInfo().subscribe((data: {}) => { 
      this.info = data as [];
      console.log(this.info);
    });

  }

  ngOnInit() {
  }

}
