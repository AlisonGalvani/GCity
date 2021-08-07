import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private provider: ProviderService,) { }

  cities: any;
  ngOnInit(): void {
    this.getCities();
    
  }

  getCities() {
    this.provider.getCities().toPromise().then(data => { this.cities = data; });
  }
}
