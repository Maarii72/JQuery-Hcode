//retornando ou definindo o conteúdo HTML de um elemento
$('header .menu li:eq(1)').html();
$('header .menu li:eq(1)').html('<a href="https://www.google.com.br">Home</a>')

//retornando ou definindo o conteudo de texto de um elemento
$('header .menu li:eq(2)').text();
$('header .menu li:eq(2) a').text('hcode treinamentos')

//redefinindo o conteudo de um elemento
$('form button').replaceWith('<h4 style="color: red; text-align: center">Registre-se</h4>')

//redefinindo o conteúdo de um elemento, com outra sintaxe
$('<h4 style="color: red; text-align: center">Registre-se</h4>').replaceAll('form button')