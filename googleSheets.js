const API_URL =
"https://script.google.com/macros/s/AKfycby_js1FwZVFg4WJKyIGk41TghCv_kQmFzWxJHc-WDqODxgD-lQhCHXqYQ2XUfV7vH7FdQ/exec";

async function carregarDados(){

    try{

        console.log("Buscando API...");

        const resposta = await fetch(API_URL);

        const dados = await resposta.json();

        const dadosProducao =
            converter(dados.producao);

        const dadosParadas =
            converter(dados.paradas);

        atualizarGraficos(
            dadosProducao,
            dadosParadas
        );

        atualizarKPIs(
            dadosProducao,
            dadosParadas
        );

    }

    catch(e){

        console.error(e);

    }

}

function converter(planilha){

    const cabecalho = planilha[0];

    return planilha.slice(1).map(linha=>{

        let obj={};

        cabecalho.forEach((c,i)=>{

            obj[c]=linha[i];

        });

        return obj;

    });

}

carregarDados();

setInterval(carregarDados,300000);