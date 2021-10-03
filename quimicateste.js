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
function cavalobretao (formula, elemento, array) {
    let cavalinho = [];
    let bretao = 0;
    for(cavalos in formula) {
        for(let i = 0; i < formula[cavalos].length; i++) {
            if (formula[cavalos].charAt(i) == elemento.charAt(elemento.length-1)) {
                if(formula[cavalos].charAt(i+1) == formula[cavalos].charAt(i+1).match(/[0-9]+/g)) {
                    cavalinho[cavalinho.length] = parseInt(formula[cavalos].charAt(i+1));
                } else {
                    cavalinho[cavalinho.length] = 1;
                }
            }
        }
    }
    for (let z = 0; z < formula[cavalos].length; z++) {
        if (formula[cavalos].charAt(z) == elemento.charAt(elemento.length-1)) {
            bretao += cavalinho[z] * array[z];
        console.log(cavalinho);
        }
    }
    console.log({elemento, formula, array, bretao});
    return bretao;
}


function calculofoda (f1,f2) {
    var dict1 = {};
    var dict2 = {};
    //Pegando primeira fórmula e passando ela pro dicionário 1
    var fo1 = f1.replace(/\s/g, "").split('+');
    console.log(fo1);
    for(element in fo1) {
        for (var i = 0; i < fo1[element].length; i++) {
            //Se for 2 letras e com número dps
            if (fo1[element].charAt(i) == fo1[element].charAt(i).match(/[A-Z]+/g) &&
            fo1[element].charAt(i+1) == fo1[element].charAt(i+1).match(/[a-z]+/g) &&
            fo1[element].charAt(i+2) == fo1[element].charAt(i+2).match(/[0-9]+/g)) {
                if (!dict1[fo1[element].charAt(i) + fo1[element].charAt(i+1)]) {
                    dict1[fo1[element].charAt(i) + fo1[element].charAt(i+1)] = parseInt(fo1[element].charAt(i+2).match(/[0-9]+/g));
                } else {
                    dict1[fo1[element].charAt(i) + fo1[element].charAt(i+1)] += parseInt(fo1[element].charAt(i+2).match(/[0-9]+/g));
                }
            }
            //Se for 2 letras e sem nenhum número dps
            else if (fo1[element].charAt(i) == fo1[element].charAt(i).match(/[A-Z]+/g) &&
            fo1[element].charAt(i+1) == fo1[element].charAt(i+1).match(/[a-z]+/g) &&
            fo1[element].charAt(i+1) != fo1[element].charAt(i+1).match(/[0-9]+/g)) {
                if (!dict1[fo1[element].charAt(i) + fo1[element].charAt(i+1)]) {
                    dict1[fo1[element].charAt(i) + fo1[element].charAt(i+1)] = 1;
                } else {
                    dict1[fo1[element].charAt(i) + fo1[element].charAt(i+1)] += 1;
                }
            }
            //Se for apenas 1 letra e com número dps
            else if (fo1[element].charAt(i) == fo1[element].charAt(i).match(/[A-Z]+/g) &&
            fo1[element].charAt(i+1) != fo1[element].charAt(i+1).match(/[a-z]+/g) &&
            fo1[element].charAt(i+1) == fo1[element].charAt(i+1).match(/[0-9]+/g)) {
                if (!dict1[fo1[element].charAt(i)]) {
                    dict1[fo1[element].charAt(i)] = parseInt(fo1[element].charAt(i+1).match(/[0-9]+/g));
                } else {
                    dict1[fo1[element].charAt(i)] += parseInt(fo1[element].charAt(i+1).match(/[0-9]+/g));
                }
            }
            //Se for apenas 1 letra e sem nenhum número dps
            else if (fo1[element].charAt(i) == fo1[element].charAt(i).match(/[A-Z]+/g) &&
            fo1[element].charAt(i+1) != fo1[element].charAt(i+1).match(/[a-z]+/g) &&
            fo1[element].charAt(i+1) != fo1[element].charAt(i+1).match(/[0-9]+/g)) {
                if (!dict1[fo1[element].charAt(i)]) {
                    dict1[fo1[element].charAt(i)] = 1;
                } else {
                    dict1[fo1[element].charAt(i)] += 1;
                }
            }
        }
        //console.log(dict1);
    };
    var fo2 = f2.replace(/\s/g, "").split('+')
    for(element in fo2) {
        for (var i = 0; i < fo2[element].length; i++) {
            //Se for 2 letras e com número dps
            if (fo2[element].charAt(i) == fo2[element].charAt(i).match(/[A-Z]+/g) &&
            fo2[element].charAt(i+1) == fo2[element].charAt(i+1).match(/[a-z]+/g) &&
            fo2[element].charAt(i+2) == fo2[element].charAt(i+2).match(/[0-9]+/g)) {
                if (!dict1[fo2[element].charAt(i) + fo2[element].charAt(i+1)]) {
                    dict1[fo2[element].charAt(i) + fo2[element].charAt(i+1)] = parseInt(fo2[element].charAt(i+2).match(/[0-9]+/g));
                } else {
                    dict1[fo2[element].charAt(i) + fo2[element].charAt(i+1)] += parseInt(fo2[element].charAt(i+2).match(/[0-9]+/g));
                }
            }
            //Se for 2 letras e sem nenhum número dps
            else if (fo2[element].charAt(i) == fo2[element].charAt(i).match(/[A-Z]+/g) &&
            fo2[element].charAt(i+1) == fo2[element].charAt(i+1).match(/[a-z]+/g) &&
            fo2[element].charAt(i+1) != fo2[element].charAt(i+1).match(/[0-9]+/g)) {
                if (!dict2[fo2[element].charAt(i) + fo2[element].charAt(i+1)]) {
                    dict2[fo2[element].charAt(i) + fo2[element].charAt(i+1)] = 1;
                } else {
                    dict2[fo2[element].charAt(i) + fo2[element].charAt(i+1)] += 1;
                }
            }
            //Se for apenas 1 letra e com número dps
            else if (fo2[element].charAt(i) == fo2[element].charAt(i).match(/[A-Z]+/g) &&
            fo2[element].charAt(i+1) != fo2[element].charAt(i+1).match(/[a-z]+/g) &&
            fo2[element].charAt(i+1) == fo2[element].charAt(i+1).match(/[0-9]+/g)) {
                if (!dict2[fo2[element].charAt(i)]) {
                    dict2[fo2[element].charAt(i)] = parseInt(fo2[element].charAt(i+1).match(/[0-9]+/g));
                } else {
                    dict2[fo2[element].charAt(i)] += parseInt(fo2[element].charAt(i+1).match(/[0-9]+/g));
                }
            }
            //Se for apenas 1 letra e sem nenhum número dps
            else if (fo2[element].charAt(i) == fo2[element].charAt(i).match(/[A-Z]+/g) &&
            fo2[element].charAt(i+1) != fo2[element].charAt(i+1).match(/[a-z]+/g) &&
            fo2[element].charAt(i+1) != fo2[element].charAt(i+1).match(/[0-9]+/g)) {
                if (!dict2[fo2[element].charAt(i)]) {
                    dict2[fo2[element].charAt(i)] = 1;
                } else {
                    dict2[fo2[element].charAt(i)] += 1;
                }
            }
        }
        //console.log(dict2);

    };

    //console.log({dict1, dict2});
    dict1temp = {...dict1};
    dict2temp = {...dict2};
    var arr1 = [];
    var arr2 = [];
    // Seta os radicais da primeira fórmula como 1
    for (let z = 0; z < fo1.length; z++) {
        arr1[z] = 1;
        //console.log(arr1);
    }
    // Seta os radicais da segunda fórmula como 1
    for (let cavalo = 0; cavalo < fo2.length; cavalo++) {
        arr2[cavalo] = 1;
    }

    var x = 0;
    while(x < 20) {
        for (entradas in dict1temp) {
                if (dict1temp[entradas] < dict2temp[entradas]) {
                    for(F1 in fo1) {
                        if(fo1[F1].includes(entradas)) {
                            dict1temp[entradas] = cavalobretao(fo1,entradas,arr1);
                            if(dict1temp[entradas] != dict2temp[entradas]) {
                                arr1[F1] += 1;
                                //console.log(arr1);
                            }
                        }
                    }
                    if (dict1temp[entradas] > dict2temp[entradas]) {
                        for(F2 in fo2) {
                            if(fo2[F2].includes(entradas)) {
                                dict2temp[entradas] = cavalobretao(fo2,entradas,arr2);
                                if(dict2temp[entradas] != dict1temp[entradas]) {
                                    arr2[F2] += 1;
                                    //console.log(arr2);
                                }
                            }
                        }
                    }
                }
                x++;
            }
        }
    console.log({dict1temp, dict2temp});
}

console.log(calculofoda('C3H8 + O2', 'CO2 + H2O'));