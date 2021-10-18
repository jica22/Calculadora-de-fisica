var form = document.getElementById("porcentagemForm");
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
document.getElementById("jurosButton").addEventListener("click",function() {
    var capital = parseFloat(document.getElementById("capital").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var tempo = parseFloat(document.getElementById("tempo").value);
    var juros = parseFloat(document.getElementById("juros").value);
    var montante = parseFloat(document.getElementById("montante").value);

    var textResult = document.getElementById('textResult');
    var textMethod = document.getElementById('textMethod');

    if (juros && taxa && tempo) {
        var result = juros/((taxa/100) * tempo);
        setInnerHTML(textResult, "<strong>Capital</strong> <br />R$" + (result));
        setInnerHTML(textMethod, `<strong>Cálculo Capital</strong> <br />
        J = C*(I/100)*T <br />
        ${juros} = C*(${taxa}/100)*${tempo} <br />
        ${juros} = C*${taxa/100}*${tempo} <br />
        ${juros} = ${(taxa/100)*tempo}C <br />
        ${(taxa/100)*tempo}C = ${juros} <br />
        C = ${juros}/${(taxa/100)*tempo} <br />
        C = ${juros/((taxa/100)*tempo)}
        `)
    }
    if (montante && taxa && tempo) {
        var result =  montante/(((taxa/100)*tempo) + 1)
        setInnerHTML(textResult, "<strong>Capital</strong> <br />R$" + (result));
        setInnerHTML(textMethod, `<strong>Cálculo Capital</strong> <br />
        <br />
        Transformando montante <br />
        M = C+J <br />
        ${montante} = C+J <br />
        C+J = ${montante} <br />
        J = ${montante} - J
        J = C*(I/100)*T <br />
        <br />
        Calculando Capital <br />

        ${montante} - C = C*(${taxa}/100)*${tempo} <br />
        ${montante} - C = C*${taxa/100}*${tempo} <br />
        ${montante} - C = ${(taxa/100)*tempo}C <br />
        -${(taxa/100)*tempo}C - C = -${montante} <br />
        -${((taxa/100)*tempo) + 1}C = -${montante} <br />
        C = -${montante}/(-${((taxa/100)*tempo) + 1}) <br />
        C = ${montante/(((taxa/100)*tempo) + 1)}
        `)
    }
    if (capital && taxa && tempo) {
        var result = capital * (taxa/100) * tempo;
        setInnerText(textResult, + "<br /> <strong>Montante</strong> <br />R$" + (capital + result));
        setInnerHTML(textMethod, + `<br />
        <strong>Cálculo Juros</strong> <br />
        J = C*(I/100)*T <br />
        J = ${capital} * (${taxa}/100)*${tempo} <br />
        J = ${capital} * ${taxa/100} * ${tempo} <br />
        J = ${capital * (taxa/100) * tempo}<br />
        <br />
        <strong>Montante</strong> <br />
        M = C + J <br />
        M = ${capital} + ${result} <br />
        M = ${capital + result}
        `)
    }
 });