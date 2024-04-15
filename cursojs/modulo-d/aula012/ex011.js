var idade = 67
console.log(`Já que você tem ${idade} anos.`)
if (idade < 18) {
    console.log('Você não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Seu voto é opcional')
} else if (idade >= 18) {
    console.log('Seu voto é obrigatório')
}