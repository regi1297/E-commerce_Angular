import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/shared/header/header.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { NavComponent } from './componets/shared/nav/nav.component';
import { BookstoreAppComponent } from './componets/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './componets/bookstore-app/filters/filters.component';
import { ProductListComponent } from './componets/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './componets/bookstore-app/product-list/product-item/product-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksService } from './componets/bookstore-app/product-list/product-list.componet.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
