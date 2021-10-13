"use strict";
var Area;
(function (Area) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Area.circunferencia = circunferencia;
})(Area || (Area = {}));
//# sourceMappingURL=geometriaCirc.js.map