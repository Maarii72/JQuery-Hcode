//adicionando um elemento ao final de outro
jquery('.menu ul').append('<li><a href="#">News</a></li>')

//adicionando um elemento ao final de outro em outra sintaxe
$('<li><a href="#">News</a></li>').appendTo('.menu ul')

//adicionando um elemento no início do outro
jquery('.menu ul').prepend('<li><a href="#">News</a></li>')

//adicionando um elemento no inicio de outro em outra sintaxe
$('<li><a href="#">News</a></li>').prependTo('.menu ul')

//adicionar um elemento após outro
$('.paragrafo').after('<h2>Hcode treinamentos</h2>')

//adicionar um elemento após outro, com outra sintaxe
$('<h2>Hcode treinamentos</h2>').insertAfter('.paragrafo')

//adicionar um elemento antes de outro
$('.paragrafo').before('<h2>Hcode treinamentos</h2>')

//adicionar um elemento antes de outro, com outra sintaxe
$('<h2>Hcode treinamentos</h2>').insertBefore('.paragrafo')

//adicionando elemento em volta de outro
$('.cars_list li').wrap('<i></i>')

//adicionando elemento em volta do conteúdo de outroe outro
$('.cars_list li').wrapInner('<u></u>')