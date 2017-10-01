import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  searchStr = '';

  constructor() { }

  ngOnInit() {
  }

  searchArtist() {
    console.log(this.searchStr);
  }

}
