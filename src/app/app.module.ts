import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteScholarshipComponent } from './favorite-scholarship/favorite-scholarship.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ModalSearchComponent } from './modal-search/modal-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteScholarshipComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ModalSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
