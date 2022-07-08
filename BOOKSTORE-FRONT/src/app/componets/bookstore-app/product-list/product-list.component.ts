import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.componet.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  booksService: BooksService;

  constructor(booksService:BooksService) {

    this.booksService = booksService;
   }

  ngOnInit(): void {

    this.livros = this.booksService.getBoock().subscribe((data => {

      this.livros = data;

    }))

  }

}
