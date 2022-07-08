import { Injectable, INJECTOR } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';


@Injectable()

export class BooksService
{
    private url = 'http://localhost:443882/api/bookstore';

    httpOptions= {
      Headers:new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}


    getBoock(){

      return this.http.get(this.url)
    }
  }
