import { Component, OnInit } from '@angular/core';

import { SearchService } from './../../services/search.service';
import { Album } from './../../models/Album';

import { CapitalizePipe } from './../../pipes/capitalize.pipe';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.css']
})
export class SearchAlbumComponent implements OnInit {

  searchStr = '';
  albums: Album[];
  findSomething = false;

  constructor(
    private searchService: SearchService
  ) { }

  searchAlbum() {
    this.searchService.searchAlbum(this.searchStr)
      .subscribe(data => {
        // console.log(data.albums);
        if (data.albums.total > 0) {
          this.findSomething = true;
          this.albums = data.albums.items;
          console.log(this.albums);
        } else {
          this.findSomething = false;
        }
      });
  }



  ngOnInit() {
  }

}
