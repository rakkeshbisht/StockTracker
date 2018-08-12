import { Component, OnInit } from '@angular/core';
import { StockInfo } from '../../services/stocks.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  stockList : Array<StockInfo>;
  constructor() { }

  ngOnInit() {

    
  }

}
