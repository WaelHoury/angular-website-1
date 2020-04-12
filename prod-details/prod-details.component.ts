import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from '../services';
import { product } from '../product';
import { Location } from '@angular/common';
@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  @Input() prod: product;

  constructor(
    private route: ActivatedRoute,
    private services: Services,
    private location: Location
  ) {}

  ngOnInit() {
    this.getprod();
  }

  getprod(): void {
    const pId = +this.route.snapshot.paramMap.get('pId');
    this.services.getprod(pId)
      .subscribe(prod => this.prod = prod);
  }
  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.services.updateprod(this.prod)
      .subscribe(() => this.goBack());
  }

}
