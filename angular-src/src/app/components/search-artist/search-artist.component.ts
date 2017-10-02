import { Component, OnInit } from '@angular/core';

import { SearchService } from './../../services/search.service';
import { Artist } from './../../models/Artist';

import { CapitalizePipe } from './../../pipes/capitalize.pipe';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  searchStr = '';
  artists: Artist[];
  findSomething = false;

  constructor(
    private searchService: SearchService
  ) { }

  searchArtist() {
    this.searchService.searchArtist(this.searchStr)
      .subscribe(data => {
        // onsole.log(data.artists.total);
        if (data.artists.total > 0) {
          this.findSomething = true;
          this.artists = data.artists.items;
          console.log(this.artists);
        } else {
          this.findSomething = false;
        }
      });
  }

  ngOnInit() {
  }

}
