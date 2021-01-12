//selecionando elemento pelo seu conteudo
$('.menu li a:container(about)').css('outline', 'solid red 2px')

//selecionando um elemento que não possue conteudo
$('.cars_list li:empty').text('vazio').css('background', 'red');

//selecionando elementos que possuem conteúdos
$('.cars_list li:parent').append('<pan style="color: green;"> - tem valor</span>')

// selecionar elemento que possue dentro dele outro elemento
$('.cars_list li:has(span)').animate({
    fontsize: '30px',
    opacity: 0.7
}, 2000)