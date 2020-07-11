/*
Promisses => Objeto para trabalhar com toda a sincronia javascripy a partir de estados
Fluxo promisses 
**Pending: Estado inicial, ainda não terminou ou ainda não foi rejeitado, ou esta inicializando
Fulfilled: Quando executo todas as operações  com sucesso
**Rejected : Quando a operação falhou , manipular com try catch
**** Fluxo****
      Pending
      ||
    Promise ----Fullfield ---- .then(resolverQuandoTerminar) ---- return  Promisse
                                                                            ||
                                                                            Pending
     ||
    Rejected
     ||
     .then(..,tratarErro) -- segundo parametro de erro then para capturar algo especifico
     .catch(TratarErro)
*/

/*
0-Obter um usuario
1-Obter o numero de telefone de um usuario a partir de seu ID
2-Obter o endereço do usuario pelo ID
Simulação da aplicação rodando em backGround
A ordem de execução das funções são de forma indefinidas é necessario fazer o controle
Tudo que é executado em segundo plano, para que a função seja chamada quando terminar sua execução
*/

//importamos um modulo interno do nodeJS
const util = require('util')
const { promises } = require('fs')
const obterEnderecoAsync = util.promisify(obterEndereco)
function obterUsuario() {// ao chamar usuario passo uma função como parametro e ela vai ser chamada, passando o resultafo assim que ela for resolvida
    //quando der algum problema --- reject(erro)
    //qunaod sucess -> RESOLV
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () { // vai esperar para retornar o valor, depois de 1 segundo, primeirp parametro erro e o segundo sucesso
            return resolve({ // passa o resultado para quem chamou assim que ela for resolvida
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)// apos 1 segundo chamar a função para informar que ela terminou7 a execução


    })

}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })

        }, 2000);

    })


}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}
// 1° adicionar a palavra async => automaticamente retornara uma promisse
main()
async function main() {
    try {
        //medir tempo de execução
        console.time('medida-promisse')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        //  const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)

        ])
        const endereco =resultado[1]
        const telefone = resultado[0]
        console.log(`
             Nome: ${usuario.nome},
             Telefone: (${telefone.ddd}) ${telefone.telefone},
             Endereço: ${endereco.rua}, ${endereco.numero}
         `)
        console.timeEnd('medida-promisse')

    } catch (error) {

        console.log("Deu ruim", error)
    }

}

/*
obterUsuario(function resolverUsuario(error, usuario) {
    // no javascript valor null || "" || 0 === false, diferente disso vai ser true
    if (error) {
        console.error('Deu Ruim em usuario', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Deu ruiim', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('Deu ruim', error)
                return;
            }
            // para printar variavel usamos a crase
            console.log(`
            Nome: ${usuario.nome} ,
            Endereco: ${endereco.rua} , ${endereco.numero}
            Telefone: ${telefone.ddd}, ${telefone.telefone}
        `)
        })
    })
})
*/

//const usuario = obterUsuario()
//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)


