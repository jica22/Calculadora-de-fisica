var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function setInnerText(element, value) {
    if(value == 0) {
        element.innerText = "0"; 
    } else if (!value) {
        element.innerText = "Desconhecido";
    } else {
        element.innerText = value;
    }
}

function calculateMS(value) {
    var number = value.toLowerCase().match(/[/u0-9]+/g);
    var signal = value.match("-");
    if (signal != null) {
        signal += number;
        number = signal;
    }
    console.log(number);
    number = parseFloat(number);
    if (number == 0) {
        return value = "0";
    }
    if (value.toLowerCase().match(/[a-z]+/g) != null) {
    var type = value.toLowerCase().match(/[a-z]+/g).join('');
    }
    if (type == "kmh" || type == "kmh²" || type == "km") {
        number = number/3.6;
        return value = number;
    } else if (type == "h") {
        number = number*60
        return value = number;
    } else {
        return value = number;
    };
}
function setInnerHTML(element, value) {
    if(value == 0) {
        element.innerHTML = "0"; 
    } else if (!value) {
        element.innerHTML = "Desconhecido";
    } else {
        element.innerHTML = value;
    }
}

function zerinho(valor) {
    if (valor == 0) {
        return valor = "0";
    } else {
        return valor;
    }
}

function zerao(valor) {
    if (valor == 0) {
        return valor = 0;
    } else {
        return valor;
    }
}
document.getElementById("vaidarcerto").addEventListener("click",function() {
    var v = zerinho(calculateMS(document.getElementById("v").value));
    var s = zerinho(calculateMS(document.getElementById("s").value));
    var so = zerinho(calculateMS(document.getElementById("so").value));
    var deltas = zerinho(calculateMS(document.getElementById("deltas").value));
    var t = zerinho(calculateMS(document.getElementById("t").value));

    const valores = [v, s, so, deltas, t];

    var textV = document.getElementById('textV');
    var textS = document.getElementById('textS');
    var textSo = document.getElementById('textSo');
    var textDeltas = document.getElementById('textDeltas');
    var textT = document.getElementById('textT');
    const textos = [textV, textS, textSo, textDeltas, textT];

    for (texto in textos) {
        setInnerText(textos[texto],"Desconhecido");
    }
    
    var F1 = false;
    var F2 = false;
    var F3 = false;
    function zerado () {
        v = zerao(v);
        s = zerao(s);
        so = zerao(so);
        deltas = zerao(deltas);
        t = zerao(t);
    }

    if (so && v && t) { //Espaço Final
        var result = so + v*t;
        setInnerText(textS, result + "m")
        setInnerText(textV, v + "m/s");
        setInnerText(textSo, so + "m");
        setInnerText(textT, t);
        setInnerHTML(textFormula, `S = So + V*T <br />
        S = ${so} + ${v}*${t} <br />
        S = ${so} + ${v*t} <br />
        S = ${result}m`);
        
    }
    if (v && s && t) { // Espaço Inicial
        var result = -1*((v*t)-s);
        setInnerText(textSo, result + "m");
        setInnerText(textS, s + "m");
        setInnerText(textV, v + "m/s");
        setInnerText(textT, t + "s");
        setInnerHTML(textFormula, `S = So + V*T <br />
        ${s} = So + ${v}*${t} <br />
        -So = ${v*t} - ${s} <br />
        -So = ${(v*t)-s}<br />
        So = ${(v*t)-s} *-1<br />
        So = ${result}m`);
        
    }
    if (so && s && t) { // Velocidade
        var result = (so - s)/-t;
        setInnerText(textV, result + "m/s");
        setInnerText(textS, s + "m");
        setInnerText(textSo, so + "m");
        setInnerText(textT, t + "s");
        setInnerHTML(textFormula, `S = So + V*T <br />
        ${s} = ${so} + V*${t} <br />
        -${t}V = ${so} - ${s} <br />
        -${t}V = ${so - s} <br />
        V = ${so - s}/${-t} <br />
        V = ${result}m/s`);
        
    }
    if (v && s && so) { // Tempo
        var result = (so - s)/-v;
        setInnerText(textT, result + "s");
        setInnerText(textS, s + "m");
        setInnerText(textV, v + "m/s");
        setInnerText(textSo, so + "m");
        setInnerHTML(textFormula, `S = So + V*T <br />
        ${s} = ${so} + ${v}*T <br />
        -${v}T = ${so} - ${s} <br />
        -${v}T = ${so - s} <br />
        T = ${so - s}/${-v} <br />
        T = ${result}s`);
        
    }

});
