//selecionando o ultimo elemento mesmo que seja mais de um caso
$('.cars_list li:last').css('text-decoration', 'underline')

//selecionando o primeiro elemento mesmo que seja mais de um caso
$('.cars_list li:first-child').css('font-size', '25px')

//selecionando elemento de uma maneira alternada(par)
$('.cars_list li:nth-child(even)').css('background-color', '#ccc')

//selecionando elemento de uma maneira alternada(ímpares)
$('.cars_list li:nth-child(odd)').css('background-color', '#ccc')

//selecionar elemento esolhido através da posição
$('.cars_list li:nth-child(1)').css('background-color', '#ccc')
//começa do 1

//selecionando elemento começando a contar do ultimo elemento
$('.cars_list li:nth-last-child(3)').css('font-weight', 'bold')