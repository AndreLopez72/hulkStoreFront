export class Book {
}
(function (Book) {
    let LanguageEnum;
    (function (LanguageEnum) {
        LanguageEnum[LanguageEnum["ENGLISH"] = 'PLASTICO'] = "ENGLISH";
        LanguageEnum[LanguageEnum["FRENCH"] = 'ACERO'] = "FRENCH";
        LanguageEnum[LanguageEnum["SPANISH"] = 'ACETATO'] = "SPANISH";
        LanguageEnum[LanguageEnum["PORTUGUESE"] = 'ALUMINIO'] = "PORTUGUESE";
    })(LanguageEnum = Book.LanguageEnum || (Book.LanguageEnum = {}));
})(Book || (Book = {}));
//# sourceMappingURL=models.js.map