const service = require('./service')
async function main() {
    try {
        const result = await service.obterPessoas('a')

        const names = []
        //  console.time('for') //for: 0.185ms
        // for( let i=0 ; i<= result.results.length -1;i++){
        //   const pessoa = result.results[i]
        //console.log('O nome procurado é:', result.results[i].name)
        // names.push(pessoa.name)
        //  }
        //  console.timeEnd('for')
        // console.log(`names`, names)
      //  console.time('forin')//for: 0.207ms

       // for (let i in result.results) {
        //    const pessoa = result.results[i]
          //  names.push(pessoa.name)
       // }
       //console.timeEnd('forin')
       // console.log(`names`, names)

       console.time('forof') //forof: 0.215ms
       for(pessoa of result.results){
           names.push(pessoa.name)
       }
       console.timeEnd('forof')
       console.log(`names`,names)
       

    } catch (error) {
        console.log('error interno', error)
    }
}


main()