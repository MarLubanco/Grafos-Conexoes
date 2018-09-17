var entrada = [2, 3, 0, 4, 0, 1, 6, 3, 8, 9, 3, 7, 4, 5]
var contador = entrada.length;
var grafos = [];
var grafoFinalizado = [];
this.imprimirResultado = imprimirResultado;
this.gruposPossiveis = gruposPossiveis;
var finalizado = {};
var maiorGrupo = 0;
var tamanhoGrupos = [];
var quantidadeGrupos = 1;

for (var i = 0; i < entrada.length; i++) {
    if (i % 2 === 0) {
        grafos[entrada[i]] = [entrada[i], entrada[i + 1]];
    }
}

debugger
grafos.forEach(function(numeros, i) {
    numeros.forEach(function(numero ,j) {
        grafos.forEach(function(numerosComp, k) {
            if(numerosComp.includes(numero)) {
                grafoFinalizado[i] = [numerosComp[0], numerosComp[1]]
            }
        })
    })
})
this.imprimirResultado(grafoFinalizado);
this.gruposPossiveis(tamanhoGrupos);

function imprimirResultado(listGrafos) {
    grafos.forEach(grafo => {
        if(maiorGrupo < grafo.length) {
        maiorGrupo = grafo.length;
        }
        tamanhoGrupos.push(grafo.length);
   })
}

function gruposPossiveis(tamanhos) {
    tamanhos.forEach(tamanho => {
        quantidadeGrupos *= tamanho 
    })
    console.log(quantidadeGrupos + " " + maiorGrupo + " " + grafoFinalizado.length);
}