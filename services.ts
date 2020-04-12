import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { data } from './data';
import { product } from './product';
import { purchases } from './purchases';



@Injectable({ providedIn: 'root' })
export class Services {

  public API = 'https://localhost:44363/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getprods (): Observable<product[]> {
    return this.http.get<product[]>(this.API+'/todo')
  }
  getpurchases (): Observable<purchases[]> {
    return this.http.get<purchases[]>(this.API+'/purchases')
  }
  getpdata (): Observable<data[]> {
    return this.http.get<data[]>(this.API+'/data')
  }
  addprod (product: purchases): Observable<purchases> {
    return this.http.post<purchases>("https://localhost:44363/api/purchases", product,this.httpOptions)
  }
  deleteprod (product: product | number): Observable<product> {
    const id = typeof product === 'number' ? product : product.pId;
    const url = `${this.API+'/todo'}?id=${id}`;

    return this.http.delete<product>(url)
  }
  updateprod (prod: product): Observable<any> {
    return this.http.put(this.API+'/todo', prod, this.httpOptions)
  }
  getprod(pId: number): Observable<product> {
    const url = `${this.API+'/todo'}/${pId}`;
    return this.http.get<product>(url)
}
}
