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

    var textResult = document.getElementById('textResult');
    var textMethod = document.getElementById('textMethod');

    if (capital && taxa && tempo) {
        var porcentagem = capital * (taxa/100);
        var valores = [];
        console.log("entrei");
        for (var i = 0; i < tempo; i++) {
            if (valores.length <= 0) {
                valores[i] = porcentagem;
            } else {
                valores[i] = valores[i-1] + porcentagem;
            }
        console.log(valores[i]);
        }
        var result = "<strong>Valores pagos</strong> <br />";
        var method = `<strong>Valor da taxa</strong> <br />
        P = C * (I/100) <br />
        P = ${capital} * (${taxa}/${100}) <br />
        P = ${capital} * ${taxa/100} <br />
        P = ${capital * (taxa/100)} <br />
        <br />`;
        for (valor in valores) {
            console.log(valor);
            if (valor == valores.length-1) {
                result += ` Mês ${parseInt(valor) + 1} = R$${valores[valor]} <br />
                <br />
                Resultado: <strong>R$${capital + valores[valor]}</strong>`
            }
            if (valor < valores.length-1) {
            result += ` Mês ${parseInt(valor) + 1} = R$${valores[valor]} <br />`;
            }
            if (valor == valores.length-1) {
                method += `<strong>Custo mês ${parseInt(valor) + 1}</strong> <br />
                V = M + P <br />
                V = ${valores[valor] - porcentagem} + ${porcentagem} <br />
                V = ${valores[valor]} <br />
                <strong>Custo final</strong> <br />
                V = C + M + P <br />
                V = ${capital} + ${valores[valor] - porcentagem} + ${porcentagem} <br />
                V = ${capital + valores[valor]}`;
            }
            if (valor < valores.length-1) {
                method += `<strong>Custo mês ${parseInt(valor) + 1}</strong> <br />
                V = M + P <br />
                V = ${valores[valor] - porcentagem} + ${porcentagem} <br />
                V = ${valores[valor]} <br /> 
            `;
            }
        }
        setInnerHTML(textMethod, method);
        setInnerHTML(textResult, result);
    }
});