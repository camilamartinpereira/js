function elegirBanda() {
    alert("¡Explora el mundo de la música con nuestras recomendaciones musicales!");

    let repetir;
    do {
        let decada;
        while (true) {
            decada = prompt("¿Cuál es tu década de música favorita? (70, 80, 90, 2000)").toLowerCase();
            if (decada === "70" || decada === "80" || decada === "90" || decada === "2000") {
                break;
            } else {
                alert("Por favor, introduce una opción válida: 70, 80, 90, 2000.");
            }
        }

        let genero;
        while (true) {
            genero = prompt("¿Cuál es tu género musical favorito? (rock, pop, alternativo)").toLowerCase();
            if (genero === "rock" || genero === "pop" || genero === "alternativo") {
                break;
            } else {
                alert("Por favor, introduce una opción válida: rock, pop, alternativo.");
            }
        }

        let banda = sugerirBanda(decada, genero);

        alert("La banda que te sugerimos es: " + banda) + "¡Que la disfrutes!";

        while (true) {
            repetir = prompt("¿Quieres recibir otra sugerencia? (si, no)").toLowerCase();
            if (repetir === "si" || repetir === "no") {
                break;
            } else {
                alert("Por favor, responde con 'si' o 'no'.");
            }
        }
    } while (repetir === "si");

    alert("¡Gracias por confiar en nosotros! Te esperamos pronto");
}

function sugerirBanda(decada, genero) {
    if (decada === "70") {
        if (genero === "rock") {
            return "Pink Floyd";
        } else if (genero === "pop") {
            return "ABBA";
        } else if (genero === "alternativo") {
            return "The Clash";
        }
    } else if (decada === "80") {
        if (genero === "rock") {
            return "Queen";
        } else if (genero === "pop") {
            return "Madonna";
        } else if (genero === "alternativo") {
            return "The Cure";
        }
    } else if (decada === "90") {
        if (genero === "rock") {
            return "Radiohead";
        } else if (genero === "pop") {
            return "Spice Girls";
        } else if (genero === "alternativo") {
            return "Nirvana";
        }
    } else if (decada === "2000") {
        if (genero === "rock") {
            return "Arctic Monkeys";
        } else if (genero === "pop") {
            return "Britney Spears";
        } else if (genero === "alternativo") {
            return "Coldplay";
        }
    }

    return "No podemos sugerir una banda con la información proporcionada.";
}

elegirBanda();
