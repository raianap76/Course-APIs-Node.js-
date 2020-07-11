const service = require('./service')
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)

    }
    return novoArrayMapeado
}
async function main() {
    try {
        const results = await service.obterPessoas('a') // const, 
        //vc não pode atribuir outro valor a essa variavl, usando let sim

        //const names = []
        //  results.results.forEach(function(item){// para cada item da lista vai chamar a função
        // names.push(item.name)
        //  })

        //função que manipula um item para cada item da lista 
        //retorno para cada item dess lista
        //para cada item dessa lista , vai retornar uym novo array , somente com o nome
        // const names = results.results.map(function(item){
        //  return item.name
        // })
        //***Forma mais elegante em apenas uma unica linha*************
        var i =1;
        const names = results.results.map((pessoa) => `[${i++}] ${pessoa.name}`) // para falar q é uma função colocar o simbolo =>

        //const names = results.results.meuMap(function(pessoa,indice){
         //   return `[${indice}] ${pessoa.name}`
       // })
        console.log("names", names)

    } catch (error) {
        console.log('Deu ruim', error)

    }
}
main()