//Adicionando uma classe
$('header .menu ul li:last a').addclass('stylized_menu')

//removendo uma classe
$('header .menu ul li:last a').removeClass('stylized_menu')

//alterar classe
$('header .menu ul li a').click(function(event){
    $(this).toggClass('stylized_menu')
})

//verificar se possue uma classe

$('header .menu ul li:last a').hasClass('stylized_menu')