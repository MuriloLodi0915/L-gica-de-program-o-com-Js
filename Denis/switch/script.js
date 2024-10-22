function verificarIdade() {

    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document = document.getElementById('resultado');



    switch (numero) {
        case 1:
            resultado.textContent = "Você escolheu o núumero 1";
        break
        case 2:
            resultado.textContent = "Você escolheu o núumero 2";
        break
        case 3:
            resultado.textContent = "Você escolheu o núumero 3";
        break
        case 4:
            resultado.textContent = "Você escolheu o núumero 4";
        break
        case 5:
            resultado.textContent = "Você escolheu o núumero 5";
        break
        
        default: resultado.textContent = "por favor, escolha um número entre 1 e 5!"
        break;
    }
}


