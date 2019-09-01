import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Producto } from '../service/model/producto';
import 'rxjs/Rx';
let ProductoListComponent = class ProductoListComponent {
    constructor(router, productoService) {
        this.router = router;
        this.productoService = productoService;
        this.producto = new Producto();
    }
    ngOnInit() {
    }
    create() {
        this.productoService.createProducto(this.producto)
            .finally(() => this.router.navigate(['/producto-list']))
            .subscribe();
    }
};
ProductoListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-producto-list',
        templateUrl: './producto-list.component.html',
        styleUrls: ['./producto-list.component.css']
    })
], ProductoListComponent);
export { ProductoListComponent };
//# sourceMappingURL=producto-list.component.js.map