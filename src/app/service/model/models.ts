
export class Book {
    
    id?: number;

    title: string;

    
    description?: string;

    unitCost?: number;

   
    isbn: string;

   
    publicationDate?: Date;

  
    nbOfPages?: number;

    imageURL?: string;

    language?: Book.LanguageEnum;

}
export namespace Book {
    export enum LanguageEnum {
        ENGLISH = <any> 'PLASTICO',
        FRENCH = <any> 'ACERO',
        SPANISH = <any> 'ACETATO',
        PORTUGUESE = <any> 'ALUMINIO',
      
    }
}