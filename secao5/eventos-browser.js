//Evento para quando o navegador mudar seu tamanho
$(window).resize(function(){
    console.info(`Alargura do navegador é ${$(window).width()}. A altura é ${$(window).height()}`)
})

//evento para quando a barra de rolagem se mover
$(window).scroll(function(){
    console.log(`Você está na posição ${$(window).scrollTop()}`)
})