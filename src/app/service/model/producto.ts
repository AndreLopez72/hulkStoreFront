export class Producto {
    
    id?: number;

    nombre: string;
    
    descripcion?: string;

    costo?: number;

    codigo: string;
   
    datodElavoracion?: Date;
  
    cantidad?: number;

    imageURL?: string;

    material?: Producto.LanguageEnum;

}
export namespace Producto {
    export enum LanguageEnum {
        ENGLISH = <any> 'PLASTICO',
        FRENCH = <any> 'ACERO',
        SPANISH = <any> 'ACETATO',
        PORTUGUESE = <any> 'ALUMINIO',
      
    }
}