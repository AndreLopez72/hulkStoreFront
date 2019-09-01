import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Producto } from '../service/model/Producto';
import 'rxjs/Rx';
let ProductoFormComponent = class ProductoFormComponent {
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
ProductoFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-producto-form',
        templateUrl: './producto-form.component.html',
        styleUrls: []
    })
], ProductoFormComponent);
export { ProductoFormComponent };
//# sourceMappingURL=producto-form.component.js.map