class Contador {
    constructor() {

    }

    asignCant(cant) {
        cantP = cant;
        console.log("Valor asignado")
    }
    // Recive si o si un ID.

    alternHide(elem, view) {
        if ($(`#${elem}`).hasClass('hide')){

            $(`#${elem}`).removeClass('hide');
            console.log("Inside If")
        } else {
            $(`#${elem}`).addClass('hide');
            $(`#${view}`).removeClass('hide');
            console.log(`#${elem}`)
            console.log("Out If")
        }
    }

    teamName(team, n) {
        switch (n) {
            case 1:
                eq1 = team;
                break;
            case 2:
                eq2 = team;
                break;
        }
    }

    printFosforos(p, e) {
        console.log(p)
        if (cantP === 30) {
            for (var i = 1; i <= 6; i++) {
                if (p >= 0) {
                    if (p >= 5) {
                        $(`#e${e}${i}`).attr('src', './resources/5.png');
                        p = p - 5;
                    } else {
                        $(`#e${e}${i}`).attr('src', `./resources/${p}.png`);
                        p = 0
                    }
                }
            }
        }

    }
}