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
    console.log(valor);
    if (valor == 0) {
        return valor = 0;
    } else {
        return valor;
    }
}
document.getElementById("vaidarcerto").addEventListener("click",function() {
    var v = zerinho(parseFloat(document.getElementById("v").value));
    var vo = zerinho(parseFloat(document.getElementById("vo").value));
    var s = zerinho(parseFloat(document.getElementById("s").value));
    var so = zerinho(parseFloat(document.getElementById("so").value));
    var deltas = zerinho(parseFloat(document.getElementById("deltas").value));
    var a = zerinho(parseFloat(document.getElementById("a").value));
    var t = zerinho(parseFloat(document.getElementById("t").value));

    const valores = [v, vo, s, so, deltas, a, t];

    var textV = document.getElementById('textV');
    var textVo = document.getElementById('textVo');
    var textS = document.getElementById('textS');
    var textSo = document.getElementById('textSo');
    var textDeltas = document.getElementById('textDeltas');
    var textA = document.getElementById('textA');
    var textT = document.getElementById('textT');
    var F1 = false;
    var F2 = false;
    var F3 = false;

    function zerado () {
        v = zerao(v);
        vo = zerao(vo);
        s = zerao(s);
        so = zerao(so);
        deltas = zerao(deltas);
        a = zerao(a);
        t = zerao(t);
    }

setInnerText(textV, v);
setInnerText(textVo, vo);
setInnerText(textS, s);
setInnerText(textSo, so);
setInnerText(textDeltas, deltas);
setInnerText(textA, a);
setInnerText(textT, t);


    //Ver se é F1;
    //Achar velocidade final.
    if (!v && vo && !s && !so && !deltas && a && t) {
        console.log("elden ring");
        zerado();
        var result = vo + a*t;
        console.log(result);
        setInnerText(textV, result);
        setInnerHTML(textFormula, "V = Vo + AT <br /> V = " + vo + " + "+ a + "*" + t + "<br /> V = " + result);
    }
    //Achar aceleração.
    if (v && vo && !s && !so && !deltas && !a && t) {
        zerado();
        var result = (vo + -v)/-t
        console.log(result);
        setInnerText(textA, result);
        setInnerHTML(textFormula,
            `V = Vo + AT <br />
            ${v} = ${vo} + A${t} <br />
            ${-t}A = ${vo + -v} <br />
            A = ${vo + -v} / ${-t} <br />
            A = ${result}`);
    }
    //Achar velocidade inicial.
    if (v && !vo && !s && !so && !deltas && a && t) {
        zerado();
        var result = -(-v + a*t)
        if (result == -0) {
        result = 0;
        }
        console.log(result);
        setInnerText(textVo, result);
        setInnerHTML(textFormula,
            `V = Vo + AT <br />
            ${v} = Vo + ${a}*${t} <br />
            -VO = ${-v} + ${a*t} <br />
            -VO = ${-v + a*t} <br />
            VO = ${-v + a*t}/ (-1) <br />
            VO = ${result}`);
    }
        //Ver se é F2
        //Achar Espaço Final
    if (!v && vo && !s && so && !deltas && a && t) {
        zerado();
        var result = so + (vo*t) + (a*t**2/2);
        console.log(result);
        setInnerText(textS, result);
        setInnerHTML(textFormula,
            `S = So + VoT + AT²/2 <br />
             S = ${so} + ${vo}*${t} + ${a}*${t}²/2<br />
             S = ${so + vo*t} + ${a}*${t**2}/2<br />
             S = ${so + vo*t} + ${a*t**2/2}<br />
             S = ${result}<br />
            `);
    }
        //Achar Espaço Inicial
    if (!v && vo && s && !so && !deltas && a && t) {
        zerado();
        var result = -(-s + vo*t + a*t**2/2)
        console.log(result);
        setInnerText(textSo, result);
        setInnerHTML(textFormula,
            `S = So + VoT + AT²/2 <br />
             ${s} = So + ${vo}*${t} + ${a}*${t}²/2<br />
             -So = ${-s} + ${vo * t} + ${a}*${t**2}/2<br />
             -So = ${-s + vo*t} + ${a}*${t**2}/2<br />
             -So = ${-s + vo*t} + ${a*t**2/2}<br />
             -So = ${-s + vo*t + (a*t**2/2)}<br />
             -So = ${-s + vo*t + (a*t**2/2)}/(-1)<br />
             So = ${result}<br />
            `);
    }
        //Achar Velocidade inicial
    if (!v && !vo && s && so && !deltas && a && t) {
        zerado();
        var result = (-s + so + a*t**2/2)/-t;
        console.log(result);
        setInnerText(textVo, result);
        setInnerHTML(textFormula,
            `S = So + VoT + AT²/2 <br />
             ${s} = ${so} + Vo*${t} + ${a}*${t}²/2<br />
             ${-t}Vo = ${-s} + ${so} + ${a}*${t**2}/2<br />
             ${-t}Vo = ${-s + so} + ${a*t**2}/2<br />
             ${-t}Vo = ${-s + so} + ${a*t**2/2}<br />
             ${-t}Vo = ${-s + so + (a*t**2/2)}<br />
             Vo = ${-s + so + (a*t**2/2)}/${-t}<br />
             Vo = ${result}<br />
            `);
    }
        //Achar Aceleração
    if (!v && vo && s && so && !deltas && !a && t) {
        zerado();
        var result = (-s + so + vo*t)/-(t**2/2)
        console.log(result);
        setInnerText(textA, result);
        setInnerHTML(textFormula,
            `S = So + VoT + AT²/2 <br />
             ${s} = ${so} + ${vo}*${t} + A*${t}²/2<br />
             ${s} = ${so} + ${vo}*${t} + A*${t**2}/2<br />
             ${s} = ${so} + ${vo}*${t} + ${t**2/2}A<br />
             ${-(t**2/2)}A = ${-s} + ${so} + ${vo*t}<br />
             ${-(t**2/2)}A = ${-s + so + vo*t}<br />
             A = ${-s + so + vo*t} / ${-(t**2/2)} <br />
             A = ${result}<br />
            `);
    }
        //Achar Tempo
    if (!v && s && vo && so && !deltas && a && !t) {
        zerado();
        so -= s;
        console.log("Você ta sendo chato opera");
        var delta = Math.sqrt((vo**2) - (4*a/2*so));
        console.log("Delta: " + delta)
        if (!delta) {
            setInnerHTML(textFormula,
                `S = So + VoT + AT²/2<br />
                ${s} = ${so + s} + ${vo}*T + ${a}*T²/2<br />
                0 = ${so + s} - ${s} + ${vo}*T + ${a/2}*T²<br />
                0 = ${so} + ${vo}*T + ${a/2}*T²<br />
                Δ = ${vo}² - 4*${a/2}*${so-s}<br />
                Δ = ${vo**2} - 4*${a/2}*${so-s} <br />
                Δ = ${vo**2} ${Math.sign(-4*a/2*so) ? "+" : ""} ${-4*a/2*so} <br />
                Δ = ${(vo**2) - (4*a/2*so-s)} <br />
                Essa equação não tem raízes.
                 <br />
                `);
            }
        else {
            console.log(delta);
        }
        var result1 = (-vo + delta) / (2*a/2);
        console.log("Result1 " + result1);
        var result2 = (-vo - delta) / (2*a/2);
        var result = [];
        if (result1 >= 0) {
            console.log("entrou");
            result.push(result1);
            console.log("Result1 " + result1);
        }
        if (result2 >= 0) {
            console.log("entrou");
            result.push(result2);
        }
        console.log(result);
        if (result.length == 0 || result === undefined) {
        setInnerText(textT, "Não existe tempo negativo.");
        } else {
            setInnerText(textT, result);
        }
        if (delta > 0) {
            setInnerHTML(textFormula,
                `S = So + VoT + AT²/2<br />
                ${s} = ${so + s} + ${vo}*T + ${a}*T²/2<br />
                0 = ${so + s} - ${s} + ${vo}*T + ${a/2}*T²<br />
                0 = ${so} + ${vo}*T + ${a/2}*T²<br />
                Δ = ${vo}² - 4*${a/2}*${so}<br />
                Δ = ${vo**2} - 4*${a/2}*${so} <br />
                Δ = ${vo**2} ${Math.sign(-4*a/2*so) ? "+" : "-"} ${-4*a/2*so} <br />
                Δ = ${(vo**2) - (4*a/2*so)} <br />
                tI = ${-vo} +- √${delta**2}/2*${a/2} <br />
                tI = ${-vo} + ${delta}/${2*a/2} <br />
                tI = ${-vo + delta}/${2*a/2} <br />
                tI = ${result1} <br />
                tII = ${-vo} +- √${delta**2}/2*${a/2} <br />
                tII = ${-vo} - ${delta}/${2*a/2} <br />
                tII = ${-vo - delta}/${2*a/2} <br />
                tII = ${result2}`);
            }
        if (delta == 0) {
            setInnerHTML(textFormula,
                `S = So + VoT + AT²/2<br />
                ${s} = ${so + s} + ${vo}*T + ${a}*T²/2<br />
                0 = ${so + s} - ${s} + ${vo}*T + ${a/2}*T²<br />
                0 = ${so} + ${vo}*T + ${a/2}*T²<br />
                Δ = ${vo}² - 4*${a/2}*${so}<br />
                Δ = ${vo**2} - 4*${a/2}*${so} <br />
                Δ = ${vo**2} ${Math.sign(-4*a/2*so) ? "+" : "-"} ${-4*a/2*so} <br />
                Δ = ${(vo**2) - (4*a/2*so-s)} <br />
                tI = ${-vo} +- √${delta**2}/2*${a/2} <br />
                tI = ${-vo} + ${delta}/${2*a/2} <br />
                tI = ${-vo + delta}/${2*a/2} <br />
                tI = ${result} <br />`);
            }
    }
        //Ver se é F3
        //Achar Velocidade final;
    if (!v && vo && !so && deltas && a && !t) {
        zerado();
        var result = Math.sqrt(vo**2 + 2*a*deltas);    
        setInnerText(textV, result);
        setInnerHTML(textFormula,
            `V² = Vo² + 2*A*ΔS<br />
            V² = ${vo}² + 2*${a}*${deltas}<br />
            V² = ${vo**2} + ${2*a*deltas}<br />
            V² = ${vo**2 + 2*a*deltas}<br />
            V = √${vo**2 + 2*a*deltas}<br />
            V = ${result}
            `);
    }
        //Achar Velocidade inicial;
    if (v && !vo && !so && deltas && a && !t) {
        zerado();
        var result = -Math.sqrt((v**2) + 2*a*deltas);
        setInnerText(textVo, result);
        setInnerHTML(textFormula,
            `V² = Vo² + 2*A*ΔS<br />
            ${v}² = Vo² + 2*${a}*${deltas}<br />
            -Vo² = ${v}² + 2*${a}*${deltas}<br />
            -Vo² = ${v**2} + ${2*a*deltas}<br />
            -Vo² = ${v**2 + 2*a*deltas} <br />
            -Vo = √${v**2 + 2*a*deltas} <br />
            -Vo = ${Math.sqrt(v**2 + 2*a*deltas)} <br />
            Vo = ${-Math.sqrt(v**2 + 2*a*deltas)} <br />
            `);
    }
        //Achar Aceleração;
    if (v && vo && !so && deltas && !a && !t) {
        zerado();
        var result = (-(v**2) + vo**2)/-(2*deltas)
        if (result == -0) {
            result = 0;
        }
        setInnerText(textA, result);
        setInnerHTML(textFormula,
            `V² = Vo² + 2*A*ΔS<br />
            ${v}² = ${vo}² + 2*A*${deltas}<br />
            ${v**2} = ${vo**2} + ${2*deltas}A<br />
            ${-2*deltas}A = ${vo**2} - ${(v**2)}<br />
            ${-2*deltas}A = ${vo**2 -(v**2)}<br />
            A = ${vo**2 -(v**2)}/${-2*deltas}<br />
            A = ${result}<br />
            `)
    }
    //Achar Delta S;
    if (v && vo && !so && !deltas && a && !t) {
        zerado();
        var result = (-(v**2) + vo**2)/-(2*a)
        if (result == -0) {
            result = 0;
        }
        setInnerText(textDeltas, result);
        setInnerHTML(textFormula,
            `Equação de Torricelli: <br />
            V² = Vo² + 2*A*ΔS<br />
            ${v}² = ${vo}² + 2*${a}*ΔS<br />
            ${v**2} = ${vo**2} + ${2*a}ΔS<br />
            ${-2*a}ΔS = ${vo**2} - ${v**2}<br />
            ${-2*a}ΔS = ${vo**2 - v**2}<br />
            ΔS = ${vo**2 - v**2}/${-2*a}<br />
            ΔS = ${result}<br />
            <hr />
            Função Horária da velocidade: <br />
            V = Vo + AT <br />
            ${v} = ${vo} + ${a}T <br />
            ${-a}T = ${vo + -v} <br />
            T = ${vo + -v} / ${-a} <br />
            T = ${(vo - v) / -a}`)
    }
});


// F1: v = vo + at;
// F2: S = So + VoT + at²/2
// F3: V² = Vo² + 2AdeltaS



//Math.pow é uma merda. NUNCA USE.