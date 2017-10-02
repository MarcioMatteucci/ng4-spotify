import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  token = localStorage.getItem('access_token');
  headers;

  searchUrl = 'https://api.spotify.com/v1/search';
  query = '?q=';
  market = '&market=ES';
  limit = '&limit=20';
  offset = '&offset=0';

  artistType = '&type=artist';
  albumType = '&type=album';
  trackType = '&type=track';

  searchArtistUrl;

  constructor(
    private http: Http
  ) { }

  setAuthenticationHeader() {
    this.headers = new Headers();
    this.headers.append('Authorization', 'Bearer ' + this.token);
  }

  // "https://api.spotify.com/v1/search?q=iron+maiden&type=artist&market=ES&limit=20&offset=0"
  searchArtist(str) {
    this.setAuthenticationHeader();
    this.searchArtistUrl = this.searchUrl + this.query + str + this.artistType + this.market + this.limit + this.offset;

    const requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.searchArtistUrl,
      headers: this.headers
    });

    return this.http.request(new Request(requestOptions))
      .map(res => res.json());
  }

}
