//removendo elementos
$('.cars_list li:eq(1)').remove()

//removendo o conteúdo do elemento
$('.cars_list li:eq(1)').empty()

//removendo um elemento, mas mantendo seus eventos associados
let txt = $('.paragrafo').detach();

//removendo os elementos em volta
$('.cars_list li').unwrap()