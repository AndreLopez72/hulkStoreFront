import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../service/model/Producto';
import 'rxjs/Rx';
import { ProductoService } from '../service/api/Producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: []
})
export class ProductoFormComponent implements OnInit {

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
