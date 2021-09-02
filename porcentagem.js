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
document.getElementById("porcentagemButton").addEventListener("click",function() {
    var porcentagem = parseFloat(document.getElementById("p").value);
    var number = parseFloat(document.getElementById("n").value);

    var textMethod = document.getElementById('textMethod');

    if (porcentagem && number) {
        console.log("entrei");
        var result = number/100 * porcentagem;
        setInnerText(textResult, result);
        setInnerHTML(textMethod, `
        x = ${number}/${100} * ${porcentagem} <br />
        x = ${number/100} * ${porcentagem} <br />
        x = ${number/100 * porcentagem}
        `);
    }
})
document.getElementById("descontoButton").addEventListener("click",function() {
    var porcentagem = parseFloat(document.getElementById("p").value);
    var number = parseFloat(document.getElementById("n").value);

    var textResult = document.getElementById('textResult');
    var textMethod = document.getElementById('textMethod');

    if (porcentagem && number) {
        console.log("entrei");
        var result = number - (number/100 * porcentagem);
        setInnerText(textResult, result);
        setInnerHTML(textMethod, `
        x = ${number} - (${number}/${100} * ${porcentagem}) <br />
        x = ${number} - (${number/100} * ${porcentagem}) <br />
        x = ${number} - ${number/100 * porcentagem} <br />
        x = ${number - (number/100 * porcentagem)}
        `);
    }
})