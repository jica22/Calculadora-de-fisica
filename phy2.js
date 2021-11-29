var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var result = "";
var method = "";
function zerado() {
    zerao(fr);
    zerao(m);
    zerao(a);
    zerao(sen);
    zerao(cos);
}
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
    if (valor === 0) {
        return valor = "0";
    } else {
        return valor;
    }
}
function zerao(valor) {
    if (valor === 0) {
        return valor = 0;
    } else {
        return valor;
    }
}

//Funções de física
function forcaResultante(m, a) {
    result += `fr = ${m*a} <br/ >`;
    method += `<strong>Força Resultante</strong> <br />
                fr = m*a <br />
                fr = ${m}*${a} <br />
                fr = ${m*a}N <br />`;

    return m*a;
}

function massa(fr, a) {
    result += `m = ${fr/a} <br />`;
    method += `<strong>Massa</strong> <br />
                fr = m*a <br />
                ${fr} = m*${a} <br />
                ${fr} = ${a}m  <br />
                -${a}m = -${fr} <br />
                m = -${fr}/(-${a})
                m = ${fr/a}kg`;

    return fr/a;
}

function aceleracao(fr, m) {
    result += `a = ${fr/m} <br />`;
    method += `<strong>Aceleração</strong> <br />
        fr = m*a <br />
        ${fr} = ${m}*a <br />
        ${fr} =  ${m}a <br />
        -${m}a = -${fr} <br />
        a = -${fr}/(-${m}) <br />
        a = ${fr/m}m/s² <br /> `;

    return fr/m;        
}

function velocidadeY(v,sen) {
    result += `vY = ${v*sen} <br />`;
    method += `<strong> Velocidade Y </strong> <br />        
        vY = v*sen(o) <br />
        vY = ${v}*${sen} <br />
        vY = ${v*sen} <br />`;

    return v*sen;
}

function velocidadeX(v,cos) {
    result += `vX = ${v*cos} <br />`;
    method += `<strong> Velocidade X </strong> <br />        
        vX = v*cos(o) <br />
        vX = ${v}*${cos} <br />
        vX = ${v*cos} <br />`;

    return v*cos;
}

function alcance(vY, vX, g) {
    result += `t = ${(vY/g)*2} <br /> 
        X = ${vX*((vY/g)*2)} <br />`;
    method += `<strong> Tempo </strong> <br />
        vY = voY + g*t <br />
        ${vY} = 0 + ${g}*t <br />
        ${vY} = 0 + ${g}t <br />
        -${g}t = -${vY} <br />
        t = -${vY}/(-${g}) <br />
        t = ${vY/g} <br />
        Multiplique tempo por 2. <br />
        t = ${vY/g}*2 <br />
        t = ${(vY/g)*2} <br />
        <br />
        <strong>Alcance Máximo </strong> <br />
        X = VoX * t <br />
        X = ${vX} * ${(vY/g)*2} <br />
        X = ${vX*((vY/g)*2)} <br />
    `;
    return vX*((vY/g)*2);
}

function altura(voY, g) {
    result += `ΔY = ${(voY**2)/(2*g)} <br />`;
    method += `<strong> Altura Máxima </strong> <br />
        Vy² = VoY² + 2*g*ΔY <br />
        0 = ${voY}² + 2*${g}*ΔY <br />
        0 = ${voY**2} + ${2*g}ΔY <br />
        ${2*g}ΔY = ${voY**2} <br />
        ΔY = ${(voY**2)/(2*g)} <br />

        `
}

document.getElementById("vaidarcerto").addEventListener("click",function() {
    var fr = zerinho(document.getElementById("fr").value);
    var m = zerinho(document.getElementById("m").value);
    var a = zerinho(document.getElementById("a").value);
    var v = zerinho(document.getElementById("v").value);
    var sen = zerinho(document.getElementById("sen").value);
    var cos = zerinho(document.getElementById("cos").value);
    var g = zerinho(document.getElementById("g").value);


    zerado();
    console.log({fr, m, a, v, sen, cos, g});
    if(m && a) {
        forcaResultante(m, a);
    }
    if (fr && a) {
        massa(fr, a);
    }
    if (fr && m) {
        aceleracao(fr, m);
    }
    if (v && cos && sen && !g) {
        var veloX = velocidadeX(v, cos);
        var veloY = velocidadeY(v, sen);
        alcance(veloY, veloX, 10);
        altura(veloY, 10);

    }
    if (v && cos && sen && g) {
        var veloX = velocidadeX(v, cos);
        var veloY = velocidadeY(v, sen);
        alcance(veloY, veloX, g);
        altura(veloY, g);

    }
    if (v && sen && !g) {
        veloY = velocidadeY(v, sen);
        altura(veloY, 10);

    }
    if (v && sen && g) {
        veloY = velocidadeY(v, sen);
        altura(veloY, g);

    }
    if (v && cos) {
        velocidadeX(v, cos);
    }

    setInnerHTML(textFormula, method);
    setInnerHTML(textResultado, result);

    method = "";
    result = "";
});