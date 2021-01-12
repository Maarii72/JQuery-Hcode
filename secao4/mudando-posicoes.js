//retornando ou definindo a posição de um elemento
$('form .field:eq(1)').offset({
    top:5,
    left:100
})

//retorna a posição de um elemento se baseando no elemento pai
$('form .field:eq(1)').position();

//retorna ou define a posição da barra de rolagem
$(document).scrollTop(400)

//retorna ou define a posição da barra de rolagem  horizontal
$(document).scrollLeft(400)