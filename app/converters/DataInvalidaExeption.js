System.register(['../util/ApplicationExeption.js'], function (_export, _context) {
    "use strict";

    var AplicationExeption;
    return {
        setters: [function (_utilApplicationExeptionJs) {
            AplicationExeption = _utilApplicationExeptionJs.AplicationExeption;
        }],
        execute: function () {
            class DataInvalidaException extends AplicationExeption {
                constructor() {
                    super('A data deve estar no formato dd/mm/aaaa');
                    //this.name = this.constructor.name;
                }
            }

            _export('DataInvalidaException', DataInvalidaException);
        }
    };
});
//# sourceMappingURL=DataInvalidaExeption.js.map