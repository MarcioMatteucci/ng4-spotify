import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';
import { SearchAlbumComponent } from './components/search-album/search-album.component';
import { SearchTrackComponent } from './components/search-track/search-track.component';


// Services
import { CredentialService } from './services/credential.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    SearchArtistComponent,
    SearchAlbumComponent,
    SearchTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [CredentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
