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

function juros(capital, juros, tempo) {
    var montante2 = [];
    for(let i = 0; i < tempo; i++) {
        if (montante2.length <= 0) {
            montante2[i] = capital/100 * juros + capital;
        } else {
            montante2[i] = ((montante2[i-1]/100)*juros) + montante2[i-1];
        }
    }
    return montante2[montante2.length-1];

}

document.getElementById("jurosButton").addEventListener("click",function() {
    var capital = parseFloat(document.getElementById("capital").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var tempo = parseFloat(document.getElementById("tempo").value);

    var textResult = document.getElementById('textResult');
    var textMethod = document.getElementById('textMethod');
    if(capital && taxa && tempo) {
        setInnerText(textResult,"R$" + juros(capital, taxa, tempo));
        setInnerHTML(textMethod, 
            `M = C*(1+i)^t <br />
            M = ${capital}(1+${taxa/100})^${tempo} <br />
            M = ${capital}(${1+(taxa/100)})^${tempo} <br />
            M = ${capital} * ${(1+(taxa/100))**tempo} <br />
            M = ${juros(capital, taxa, tempo)} <br />
        `)
    }
});