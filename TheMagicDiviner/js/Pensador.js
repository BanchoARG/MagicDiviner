class Pensador {
    
    pensar() {
        let opciones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let seleccionados = [];
        let rand = 0;
        for (var i = 0; i < 4; i++) {
            rand = Math.floor(Math.random() * opciones.length)
            seleccionados.push(opciones.splice(rand, 1)[0]);
        }
        return seleccionados;
    }

    responder() {
        let apuesta = require('./Adivinador');
        let ingreso = apuesta.ingreso;
        let seleccionados = [1, 2, 4, 3];
        ingreso = ingreso.split("");

        let correcto = 0;
        for (let i = 0; i < ingreso.length; i++) {

            if (seleccionados[i] == ingreso[i]) {
                correcto = correcto + 1;
                seleccionados.splice(i, 1);
                ingreso.splice(i, 1);
                i = i - 1;
            }
        }
        let regular = 0;
        let incorrecto = 0;
        console.log(ingreso);
        console.log(seleccionados);
        for (let index = 0; index < seleccionados.length; index++) {
            console.log(index);
            if (seleccionados.includes((parseInt(ingreso[index])), 0)) {
                regular = regular + 1;
            } else {
                incorrecto = incorrecto + 1;
            }
        }

        module.exports.correcto = correcto;
        module.exports.incorrecto = incorrecto;
        module.exports.regular = regular;
    }
}