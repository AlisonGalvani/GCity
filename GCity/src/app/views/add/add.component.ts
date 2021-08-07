import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../provider.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private provider: ProviderService) { }

  newCity: any = "";
  cities: any;
  selectedCity: any = "";
  cityStatus: any;
  cityStatusMessage: any;
  newCep: any = "";
  cepStatus: any;
  cepStatusMessage: any;

  ngOnInit(): void {
    this.getCities();
  }

  addCity() {
    let newCity = { 'name': this.newCity }

    this.provider.addCity(newCity).toPromise()
      .then(data => { this.cityStatus = true; this.cityStatusMessage = 'Incluido!'; this.resetFields(); })
      .catch(err => { this.cityStatus = false; this.cityStatusMessage = err.error; this.resetFields(); });
  }

  getCities() {
    this.provider.getCities().toPromise().then(data => { this.cities = data; });
  }

  addCep() {
    let newCep = { "idCity": this.selectedCity, "cep": this.newCep };

    this.provider.addCep(newCep).toPromise()
      .then(data => { this.cepStatus = true; this.cepStatusMessage = 'Incluido!'; this.resetFields(); })
      .catch(err => { this.cepStatus = false; this.cepStatusMessage = err.error; this.resetFields(); })
  }

  resetFields() {
    this.newCity      = null;
    this.selectedCity = null;
    this.newCep       = null;
    this.selectedCity = null;
    this.getCities();
  }
}
