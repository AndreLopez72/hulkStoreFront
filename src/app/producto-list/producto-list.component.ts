import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../service/model/producto';
import 'rxjs/Rx';
import { ProductoService } from '../service/api/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html'
})
export class ProductoListComponent implements OnInit {
  private nbProductos: number;
  private productos: Producto[];

  constructor(private productoService: ProductoService) {
  }
  ngOnInit() {
    this.productoService.countProductos().subscribe(nbProductos => this.nbProductos = nbProductos);
    this.productoService.getProductos().subscribe(productos => this.productos = productos);
}

}
