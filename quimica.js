function caracteres (elemento, i) {
    return elemento.charAt(i) == elemento.charAt(i).toLowerCase();
}
function numeros (elemento, i) {
    // return !isNaN(elemento.charAt(i+1));
    // console.log({elemento,i,charat:elemento.charAt(i+1)});
    // if(!parseInt(elemento.charAt(i+1))) {
    //     return false;
    // };
    // return true;
    let cavalo = elemento.charAt(i+1).match(/[/u0-9]+/g);
    // console.log(cavalo);
    if (cavalo == "u") {
        return elemento.charAt(i+1).match(/[0-9]+/g);
    } else {
        return elemento.charAt(i+1).match(/[/u0-9]+/g);
    }
    // CTRL + ;
}
function replica (elemento, dict, i) {
    return dict[elemento.charAt(i-1) + elemento.charAt(i)];
}


function calculofoda (f1,f2) {
    var dict1 = {};
    var dict2 = {};
    //Pegando primeira fórmula e passando ela pro dicionário 1
    var fo1 = f1.replace(/\s/g, "").split('+');
    for(element in fo1) {
        for (var i = 0; i < fo1[element].length; i++) {
            //Vendo se o fo1[element] já existe / adicionando o número após ele.
            
            if (!caracteres(fo1[element], i) && 
            numeros(fo1[element], i) &&
            dict1[fo1[element].charAt(i)]){
                dict1[fo1[element].charAt(i)] += parseInt(fo1[element].charAt(i+1));
                console.log("quinta",element,i);
            }

            //Vendo se o fo1[element] já existe / adicionando o valor 1.

            else if (!caracteres(fo1[element], i) && 
            !numeros(fo1[element], i) &&
            dict1[fo1[element].charAt(i)] &&
            fo1[element].charAt(i) != fo1[element].charAt(i).match(/[/u0-9]+/g) &&
            fo1[element].charAt(i+1) != fo1[element].charAt(i+1).toLowerCase()) {
                dict1[fo1[element].charAt(i)] += 1;
                console.log("sexta",element,i);
            }
            
            //Vendo se é um fo1[element] com apenas 1 letra / adicionando o valor do número
            
            else if (!caracteres(fo1[element], i) && 
            numeros(fo1[element], i) &&
            !dict1[fo1[element].charAt(i)]){
                dict1[fo1[element].charAt(i)] = parseInt(fo1[element].charAt(i+1));
                console.log("sétima",element,i);
            }

            //Vendo se é um fo1[element] com apenas 1 letra / adicionando o valor 1.

            else if (!caracteres(fo1[element], i) && 
            !numeros(fo1[element], i) &&
            !dict1[fo1[element].charAt(i)] &&
            fo1[element].charAt(i) != fo1[element].charAt(i).match(/[/u0-9]+/g) &&
            fo1[element].charAt(i+1) != fo1[element].charAt(i+1).toLowerCase()) {
                dict1[fo1[element].charAt(i)] = 1;
                console.log("oitava",element,i);
            }
            //Vendo se tem numero do lado / é uma nova entrada / tamanho do nome do fo1[element]

            else if (caracteres(fo1[element], i) && 
            numeros(fo1[element], i) &&
            !replica(fo1[element], dict1, i)) {
                dict1[fo1[element].charAt(i-1) + fo1[element].charAt(i)] = parseInt(fo1[element].charAt(i+1));
                console.log("primeira",element,i);
            }

            // Vendo se é uma nova entrada / tamanho do nome do fo1[element]

            else if (caracteres(fo1[element], i) && 
            !numeros(fo1[element], i) && !replica(fo1[element], dict1, i)) {
                dict1[fo1[element].charAt(i-1) + fo1[element].charAt(i)] = 1;
                console.log("segunda",element,i);
            }
            //Vendo se é uma entrada já existente / adicionando 1 para o valor dele.

            else if (caracteres(fo1[element], i) && 
            numeros(fo1[element], i) && replica(fo1[element],dict1,i)) {
                dict1[fo1[element].charAt(i-1) + fo1[element].charAt(i)] += parseInt(fo1[element].charAt(i+1));
                console.log("terceira",element,i);
            }

            //Vendo se é uma entrada já existente / adicionando o valor do número.
            
            else if (caracteres(fo1[element], i) && 
            !numeros(fo1[element], i) && replica(fo1[element],dict1,i)) {
                dict1[fo1[element].charAt(i-1) + fo1[element].charAt(i)] += 1;
                console.log("quarta",element,i);
            }
        }
    };
    var fo2 = f2.replace(/\s/g, "").split('+')
    for(element in fo2) {
        for (var i = 0; i < fo2[element].length; i++) {

            //Vendo se o fo2[element] já existe / adicionando o número após ele.
            
            if (!caracteres(fo2[element], i) && 
            numeros(fo2[element], i) &&
            dict2[fo2[element].charAt(i)]){
                dict2[fo2[element].charAt(i)] += parseInt(fo2[element].charAt(i+1));
                console.log("quinta",element,i);
                // i++;
            }

            //Vendo se o fo2[element] já existe / adicionando o valor 1.

            else if (!caracteres(fo2[element], i) && 
            !numeros(fo2[element], i) &&
            dict2[fo2[element].charAt(i)] &&
            fo2[element].charAt(i) != fo2[element].charAt(i).match(/[/u0-9]+/g) &&
            fo2[element].charAt(i+1) != fo2[element].charAt(i+1).toLowerCase()) {
                dict2[fo2[element].charAt(i)] += 1;
                console.log("sexta",element,i);
                // i++;
            }
            
            //Vendo se é um fo2[element] com apenas 1 letra / adicionando o valor do número
            
            else if (!caracteres(fo2[element], i) && 
            numeros(fo2[element], i) &&
            !dict2[fo2[element].charAt(i)]){
                dict2[fo2[element].charAt(i)] = parseInt(fo2[element].charAt(i+1));
                console.log("sétima",element,i);
                // i++;
            }

            //Vendo se é um fo2[element] com apenas 1 letra / adicionando o valor 1.

            else if (!caracteres(fo2[element], i) && 
            !numeros(fo2[element], i) &&
            !dict2[fo2[element].charAt(i)] &&
            fo2[element].charAt(i) != fo2[element].charAt(i).match(/[/u0-9]+/g) &&
            fo2[element].charAt(i+1) != fo2[element].charAt(i+1).toLowerCase()) {
                dict2[fo2[element].charAt(i)] = 1;
                console.log("oitava",element,i);
                // i++;
            }
            //Vendo se tem numero do lado / é uma nova entrada / tamanho do nome do fo2[element]

            else if (caracteres(fo2[element], i) && 
            numeros(fo2[element], i) &&
            !replica(fo2[element], dict2, i)) {
                dict2[fo2[element].charAt(i-1) + fo2[element].charAt(i)] = parseInt(fo2[element].charAt(i+1));
                // i++;
                console.log("primeira",element,i);
            }

            // Vendo se é uma nova entrada / tamanho do nome do fo2[element]

            else if (caracteres(fo2[element], i) && 
            !numeros(fo2[element], i) && !replica(fo2[element], dict2, i)) {
                dict2[fo2[element].charAt(i-1) + fo2[element].charAt(i)] = 1;
                // i++;
                console.log("segunda",element,i);
            }
            //Vendo se é uma entrada já existente / adicionando 1 para o valor dele.

            else if (caracteres(fo2[element], i) && 
            numeros(fo2[element], i) && replica(fo2[element],dict2,i)) {
                dict2[fo2[element].charAt(i-1) + fo2[element].charAt(i)] += parseInt(fo2[element].charAt(i+1));
                console.log("terceira",element,i);
                // i++;
            }

            //Vendo se é uma entrada já existente / adicionando o valor do número.
            
            else if (caracteres(fo2[element], i) && 
            !numeros(fo2[element], i) && replica(fo2[element],dict2,i)) {
                dict2[fo2[element].charAt(i-1) + fo2[element].charAt(i)] += 1;
                console.log("quarta",element,i);
                // i++;
            }
        }

    };

    console.log({dict1, dict2});
    dict1temp = {...dict1};
    dict2temp = {...dict2};
    console.log({dict1, dict2, dict1temp, dict2temp});

    var arr1 = [];
    var arr2 = [];
    // Seta os radicais da primeira fórmula como 1
    for (let z = 0; z < fo1.length; z++) {
        arr1[z] = 1;
    }
    // Seta os radicais da segunda fórmula como 1
    for (let cavalo = 0; cavalo < fo2.length; cavalo++) {
        arr2[cavalo] = 1;
    }

    console.log({arr1, arr2, dict1temp, dict2temp, dict1, dict2, fo1, fo2});

    for (let x = 0; x < 10; x++) {
        
        for (entradas in dict1temp) {
            if (dict1temp[entradas] != dict2temp[entradas]) {
                for(FF1 in fo1) {
                    if (dict1temp[entradas] < dict2temp[entradas] && fo1[FF1].includes(entradas)) {
                        arr1[FF1] += 1;
                    }
                    if (dict1temp[entradas] > dict2temp[entradas] && fo2[FF1].includes(entradas)) {
                        arr2[FF1] += 1;
                    }
                }
            }
            
        }
        for(entradas in dict1) {
            for (FF1 in fo1) {
                if (fo1[FF1].includes(entradas)) {
                    dict1temp[entradas] = dict1[entradas] * arr1[FF1];
                }
                if (fo2[FF1].includes(entradas)) {
                    dict2temp[entradas] = dict2[entradas] * arr2[FF1];
                }
            }
        }
    }

    // dict1 = dict1temp;
    // dict2 = dict2temp;

    // console.log({arr1, arr2, dict1temp, dict2temp, dict1, dict2, fo1, fo2});
    // console.log(arr1);
    // console.log(arr2);
    // console.log(dict1temp);
    // console.log(dict2temp);
    // console.log(dict1);
    // console.log(dict2);
    // console.log(fo1);
}
console.log(calculofoda('Cu + AgNO3', 'Ag+CuN2O6'));