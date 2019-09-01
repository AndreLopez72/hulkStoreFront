import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import 'rxjs/Rx/map';
import { Producto } from '../service/model/producto';
let ProductoDetailComponent = class ProductoDetailComponent {
    constructor(router, route, productoService) {
        this.router = router;
        this.route = route;
        this.productoService = productoService;
        this.producto = new Producto();
    }
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
};
ProductoDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-producto-detail',
        templateUrl: './producto-detail.component.html'
    })
], ProductoDetailComponent);
export { ProductoDetailComponent };
//# sourceMappingURL=producto-detail.component.js.map