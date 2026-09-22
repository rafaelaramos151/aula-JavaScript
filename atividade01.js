const prompt =  require("prompt-sync")()

let Itens = []
//etapa2//
function DescobrirRaridade(preco){
    console.log(preco>=500)
    if (preco < 100){
        return "Comum"
    } else if(preco >= 100 && preco < 500){
        return "Raro"
    }else if(preco >= 500){
        return "Lendário"
    }
}

//etapa 3//
for(let i = 0;i<5;i++){
    let nomeItem = prompt(`Insira o nome do ${i+1}º item: `)
    let precoItem = parseFloat(prompt(`Insira o preço do ${i+1} item: `))
    let raridadeItem = DescobrirRaridade(precoItem);
    let quantidadeEstoque = 12;
    console.log(precoItem)
    console.log(raridadeItem)
    //etapa 1//
    let item = {
        nome: nomeItem,
        preco: precoItem,
        raridade: raridadeItem,
        estoque: quantidadeEstoque,
        destaque: (precoItem>500),
        promocao: ((i+1)%2==0)
    }
    //fim etapa1//
    Itens.push(item)
}
console.table(Itens)
let opcao = parseFloat("Simulação venda, escolha um dos itens: ")
while (isNaN(opcao)&&opcao < 0&&opcao>Itens.length){
    opcao = parseFloat("Simulação venda, escolha um dos itens: ")
}
opcao = Itens[opcao]
while(opcao.estoque > 0){
    console.log(`Estoque do item ${opcao.nome}: ${opcao.estoque}`)
    opcao.estoque -= 1
}
console.log(`Estoque do item ${opcao.nome}: ${opcao.estoque}`)
//etapa 5//
console.table(Itens)