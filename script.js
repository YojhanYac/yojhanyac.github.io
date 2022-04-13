function convertidor(opcion, salto) {
    
    var input = document.getElementById("input").value;
    var output = document.getElementById("output").value;

    output = input.split(' ').join('');

    var buff = "";
    var cont = 0;

    var inicioString;
    var finalString;

    switch(opcion) {
        case "agregarComillaYComa":
            inicioString = ",\"";
            finalString = "\"";
            break;
        case "agregarComillaYPuntoComa":
            inicioString = ";\"";
            finalString = "\"";
            break;
        case "agregarComillaSimpleYComa":
            inicioString = ",\'";
            finalString = "\'";
            break;
        case "agregarComillaSimpleYPuntoComa":
            inicioString = ";\'";
            finalString = "\'";
            break;
        case "agregarComa":
            inicioString = ",";
            finalString = "";
            break;
        case "agregarPuntoComa":
            inicioString = ";";
            finalString = "";
            break;
        default:
            break;
    }

    var values;
    var aux = "";
    var valor = "";

    if(salto == "true") {
        aux = "\n";
        valor = inicioString;
        inicioString = finalString;

        var splitString = valor.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        
        finalString = joinArray;
    }

    values = output.split('\n');

    values.forEach(element => {
        if(cont != 0) {
            if(element != "") {
                buff = buff + aux + inicioString + element + finalString;
            }
        } else {
            if(salto == "true") {
                buff = buff + inicioString + element + finalString;

            } else {
                buff = buff + finalString + element + finalString;
            }
            cont++;
        }
    });

    if(salto == "true") {
        buff = buff.substring(0, buff.length - 1);
    } 

    document.getElementById("output").value = buff;

}

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("textarea");
    aux.innerHTML = document.getElementById(id_elemento).value;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}