const idade = 20;
const isHuman = false;
const mesDeAniversario = 'Janeiro';
const seuNome = 'Pedro';
const seuSobrenome = 'Pacheco';

if(idade > 18){
    console.log(`A idade é maior que 18`)
}else{
    console.log('A idade é menor que 18')
};

if(idade > 18 && isHuman){
    console.log('A idade é maior que 18 e você é humano');
}else{
    console.log('A idade é menor que 18 ou você não é humano');
};

if(mesDeAniversario == 'Janeiro' || mesDeAniversario == 'Dezembro'){
    console.log('O mês do aniversariante é janeiro ou dezembro');
}else{
    console.log('O mês do aniversário não é janeiro nem dezembro');
};

// Bônus

if(seuNome.split('')[0] === 'R'){
    console.log('Seu nome começa com a letra R');
}else{
    console.log('Seu nome não começa com a letra R');
};

if(seuNome.split('')[0] === 'E' || seuSobrenome.length > 6){
    console.log('Seu nome começa com E ou seu sobrenome tem mais de 6 caracteres');
}else{
    console.log('Seu nome não começa com a letra E ou seu Sobrenome não tem mais de 6 caracteres');
};
