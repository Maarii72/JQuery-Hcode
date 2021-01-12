//selecionar o ultimo elemento da lista
$('.cars_list li:last').click(function(){
    alert('ok')
})

//selecionar o primeiro elemento da lista
$('.cars_list li:first').click(function(){
    alert('ok')
})

//selecionar elementos alternados - ímpares
$('.cars_list li:even').css('background-color', '#ccc')

//selecionar - elementos alternados Pares
$('.cars_list li:odd').css('background-color', '#ccc')

//selecionar - elementos de uma maneira específica
$('.cars_list li:eq(1)').css('background-color', '#ccc')

//selecionar - elementos que estão abaixo de uma posição
$('.cars_list li:gt(2)').css('opacity', '0.3')
//novas versões não funciona

//selecionar - elementos que estão acima de uma posição
$('.cars_list li:lt(2)').css('opacity', '0.3')
//novas versões não funciona
