function verificarIdade() {

    const idade = document.getElementById('idade').value;
    const resultado = document = document.getElementById('resultado');



    if (idade <=0) {
        resultado.textContent = "Essa idade não é aceita"
    } else if(idade >= 18) {
        resultado.textContent = "Você é maior de idade. uhu, poderei tirar carteira de motorista!";
    } 
     else  {
        resultado.textContent = "Você não é maior de idade. Infelizmente não poderá tirar carteira de motorista"
}
}


