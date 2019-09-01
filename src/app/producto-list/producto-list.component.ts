import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../service/model/producto';
import 'rxjs/Rx';
import { ProductoService } from '../service/api/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  private producto: Producto = new Producto();

  constructor(private router: Router, private productoService: ProductoService) { }

  ngOnInit() {
  }

  create() {
    this.productoService.createProducto(this.producto)
        .finally(() => this.router.navigate(['/producto-list']))
        .subscribe();
  }

}
