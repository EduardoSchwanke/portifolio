const quantidade = document.querySelector('#qtde');
const preco = document.querySelector('#preco');
const incluiLayout = document.querySelector('#layout-sim');
const prazo = document.querySelector('#prazo')

const atualizarPreco = () => {
    const temJS = document.querySelector('#js');
    let calculoPreco = quantidade.value * 100;
    if(temJS.checked){
        calculoPreco = calculoPreco + (calculoPreco * 10/100);
    }  
    if(incluiLayout.checked){
        calculoPreco = calculoPreco + 500;
    }

    let taxaUrgencia = 1 - prazo.value * 0.1;
    calculoPreco = calculoPreco + (calculoPreco*taxaUrgencia);
    preco.innerHTML = 'R$ ' + calculoPreco.toFixed(2);
}



quantidade.addEventListener('change', atualizarPreco);

document.querySelector('#js').addEventListener('change', atualizarPreco);

incluiLayout.addEventListener('change', atualizarPreco);

document.querySelector('#layout-nao').addEventListener('change', atualizarPreco);

document.querySelector('#prazo').addEventListener('change', () => {
    const prazo = document.querySelector('#prazo');
    document.querySelector('label[for=prazo]').innerHTML = 'Prazo: ' + prazo.value + ' semanas';
 
    atualizarPreco();
});