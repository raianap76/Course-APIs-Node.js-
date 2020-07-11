/*
0-Obter um usuario
1-Obter o numero de telefone de um usuario a partir de seu ID
2-Obter o endereço do usuario pelo ID
Simulação da aplicação rodando em backGround
A ordem de execução das funções são de forma indefinidas é necessario fazer o controle
Tudo que é executado em segundo plano, para que a função seja chamada quando terminar sua execução
*/

function obterUsuario(callback) {// ao chamar usuario passo uma função como parametro e ela vai ser chamada, passando o resultafo assim que ela for resolvida

    setTimeout(function () { // vai esperar para retornar o valor, depois de 1 segundo, primeirp parametro erro e o segundo sucesso
        return callback(null, { // passa o resultado para quem chamou assim que ela for resolvida
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)// apos 1 segundo chamar a função para informar que ela terminou7 a execução

}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1199002',
            ddd: 11
        })

    }, 2000);

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}
function resolverUsuario(erro, usuario) {// callBack trabalha de forma que , quando terminar de executar a instrução retorar
    //ovalor do usuario (padrão erro sucesso:Callback)
    console.log('usuario', usuario)

}
//quando eu ir no banco de dados trazer a informação para chamar a função, callBack 
//quando o obter usuario terminar de executar  de executar a sua função ele vai chamar essa função
//entãoo quano eu conseguir ir no banco de dados e trazer essa informação , ele vai chmar essa funçãop
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

//const usuario = obterUsuario()
//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)


