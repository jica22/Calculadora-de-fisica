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
    var v = zerinho(document.getElementById("v").value);
    var s = zerinho(document.getElementById("s").value);
    var so = zerinho(document.getElementById("so").value);
    var deltas = zerinho(document.getElementById("deltas").value);
    var t = zerinho(document.getElementById("t").value);

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
        zerado();
        var result = so + v*t;
        setInnerText(textS, result + "m")
        setInnerText(textV, v + "m/s");
        setInnerText(textSo, so + "m");
        setInnerText(textT, t);
        setInnerHTML(textFormula, `S = So + V*T <br />
        S = ${so} + ${v}*${t} <br />
        S = ${so} + ${v*t} <br />
        S = ${result}m`);
        
    } else if (v && s && t) { // Espaço Inicial
        zerado();
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
        
    } else if (so && s && t) { // Velocidade
        zerado();
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
        
    } else if (v && s && so) { // Tempo
        zerado();
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
