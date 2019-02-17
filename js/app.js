var cantP = 30;

var p1 = 0;
var p2 = 0;
var acump1 = 0;
var acump2 = 0;

var eq1 = '';
var eq2 = '';



$(document).ready(function () {

    const contador = new Contador;

    $('#a30').click(function (e) {
        e.preventDefault();
        contador.asignCant(30);
        console.log(cantP)

    });

    $('#a24').click(function (e) {
        e.preventDefault();
        contador.asignCant(24);
        console.log(cantP)
    });

    $('#iniciar').click(function (e) {
        e.preventDefault();
        contador.teamName($('#eq1I').val(), 1);
        contador.teamName($('#eq2I').val(), 2);
        contador.alternHide('seleccion');

        $('#navF').html(`${eq1} VS ${eq2}`);

    });

    $('#sume1').click(function (e) {
        e.preventDefault();
        p1++
        $('#cante1').html(p1.toString());
        if (p1 > 0 && p1 <= cantP) {
            contador.printFosforos(p1, 1);
        } else {
            alert(`Ha ganado el ${eq1}`);
            // counter.End();
        }
    });

    $('#reste1').click(function (e) {
        e.preventDefault();
        p1--
        $('#cante1').html(p1.toString());
        if (p1 > 0 && p1 <= cantP) {
            contador.printFosforos(p1, 1);
        } else {
            alert(`Ha ganado el ${eq1}`);
            // counter.End();
        }
    });

    $('#sume2').click(function (e) {
        e.preventDefault();
        p2++
        $('#cante2').html(p2.toString());
        if (p2 > 0 && p2 <= cantP) {
            contador.printFosforos(p2, 2);
        } else {
            alert(`Ha ganado el ${eq2}`);
            // counter.End();
        }
    });

    $('#reste2').click(function (e) {
        e.preventDefault();
        p2--;
        $('#cante2').html(p2.toString());
        if (p2 > 0 && p2 <= cantP) {
            contador.printFosforos(p2, 1);
        } else {
            alert(`Ha ganado el ${eq2}`);
            // counter.End();
        }
    });

});