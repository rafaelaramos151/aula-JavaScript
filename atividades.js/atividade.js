// atividade 1

for (const elemento of elementosFake){
    elemento.style;backgroudColor = '#FFFFFF';
    console.log(elemento);
}

// atividade 2 

elementosFake.forEach((elemento) => {
      for (const chave in elemento) {
      if(chave === 'id') {
      const idformato = String(lemento[chave]).padStart(2, '0');
      elemento[chave] = `id ${idFormato}`
     }
    }
});

console.log(elementosFake);


// atividade 3 

elementosFake.forEach(elemento => {
    if(elemento.ClassList.includes('peding')) {
        elemento.ClassList = elemento.ClassList.filter(Classe => Classe >= 'peding');
        elemento.ClassList.push('done');
        elemento.style.color = 'green';
    }
});

console.log(elementosFake);


// atividade 4 

 for (let elemento of elementosFake){
 if (elemento.tagName == 'DIV') {
     elemento.tag.Name = "SECTION";
     elemento.ClassList.push("converted")

 }
 }

 console.log(elementosFake);

 
 // atividade 5 

 let relatorioDeEstilos = []
 elementosFake.forEach(elemento => {
   relatorioDeEstilos.push({
    id: elemento.id,
    tagName: elemento.tagName,
    style: elemento.style,
   })

 });
console.log(relatorioDeEstilos);