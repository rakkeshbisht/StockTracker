import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks : Array<string> = ['BHUSANSTL', 'GRAPHITE', 'RCOM', 'BDL', 'MARKSANS'];
let service : string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInfo {
  symbol : string;
  lastTradePriceOnly : number;
  change : number;
  changeInPercent : number;
  symbolDescription : string;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  get(){
    return stocks.slice();
  }

  add(stock){
    stocks.push(stock);
    return this.get();
  }

  remove(stock){
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols){
    if (symbols) {
      return this.http.get<Array<StockInfo>>(service + '/stocks/snapshot?symbols=' + symbols.join());      
    }
  }
}
