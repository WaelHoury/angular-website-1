import { Component, OnInit } from '@angular/core';

import { data } from '../data';
import { product } from '../product';
import { purchases } from '../purchases';
import { Services } from '../services';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  products: product[];
  puchases: purchases[];
  data: data[];
  purc: purchases;
  title = 'Angular Charts';
  public single = [];
  view: any[] = [700, 400];

  // options for the chart

  showXAxis = true;

  showYAxis = true;

  gradient = false;

  showLegend = true;

  showXAxisLabel = true;

  xAxisLabel = 'product';

  showYAxisLabel = true;

  yAxisLabel = 'value';

  timeline = true;

  colorScheme = {

    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']

  };



  //pie

  showLabels = true;
  public singl = [];

  constructor(private service: Services) { }

  ngOnInit() {
    this.getproducts();
    this.getpurchases();
    this.getdata();
  }
  getproducts(): void {
    this.service.getprods()
    .subscribe(products => {
      this.products = products;
      console.log(products);    });
  }
  getpurchases(): void {
    this.service.getpurchases()
    .subscribe(puchases => {
      this.puchases = puchases;
      console.log(puchases);    });
  }
  getdata(): void {
    this.service.getpdata()
    .subscribe(data => {
      this.data = data;
      console.log(data);    });

  }
  add(produ: product): void {
const idprod=produ.pId;
const id=1;
const xCreatedAt="2020-04-09T12:15:48.654501+03:00";

    this.service.addprod( {id,idprod,xCreatedAt} ).subscribe(purc => {
      this.puchases.push(purc);

    });;
      };


  delete(product: product): void {
    this.products = this.products.filter(h => h !== product);
    this.service.deleteprod(product).subscribe();
  }
}
