
class Adivinador {
    
    adivinar() {
        let ingreso = document.getElementById['ingreso'].value;
        return ingreso;
    }

    leerRespuesta(){
        let pensador = require('./Pensador');
        let correcto = pensador.correcto;
        let incorrecto = pensador.incorrecto;
        let regular = pensador.regular;
        const nuevoTr = `<tr>
        <td>${ingreso}</td>
        <td>${(correcto == 4) ? 'Acertaste! Juego terminado.' : `C:${correcto} I:${incorrecto} R:${regular}`}</td>
    </tr>`;
    document.getElementById("result-table").getElementsByTagName("tbody")[0].innerHTML += nuevoTr;
    }
   
}
module.exports.ingreso = Adivinador.adivinar();
