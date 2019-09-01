import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';

const routes: Routes = [
  {path: '', component: ProductoListComponent},
  {path: 'producto-list', component: ProductoListComponent},
  {path: 'producto-detail/:productoId', component: ProductoDetailComponent},
  {path: 'producto-form', component: ProductoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
