import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/Rx/map';
import { Producto } from '../service/model/producto';
import { ProductoService } from '../service/api/producto.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html'
  
})
export class ProductoDetailComponent implements OnInit {

  private producto: Producto = new Producto();

  constructor(private router: Router, private route: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit() {
   // this.route.params.map(params => params['productoid'])
     // .switchMap(id => this.productoService.getProducto(id))
      //.subscribe(producto => this.producto = producto);
  }

  delete() {
    this.productoService.deleteProducto(this.producto.id)
      .finally(() => this.router.navigate(['/producto-list']))
      .subscribe();
  }

}
