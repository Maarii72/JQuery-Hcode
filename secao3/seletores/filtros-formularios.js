//selecionando um botão
$('#register:button').text()

//selecionando um checkbox
$('#register:checkbox').trigger('click')

//retornar todos elementos que foram checados
$('[type=radio').change(function(){
    let value = $('input:checked').val();
    let gender= (value =='M')? 'masculino' : 'feminino'
    alert(`você selecionou o sexo ${gender}`)
})

//selecionando os elementos checados
$('input:checked').val()

//selecionando os elementos desabilitados
$('#regioster:disabled').val('anthony#hcode.com.br'.prop('disabled', false))

//selecionando o botão submit
$('#register:submit').css('background-color', 'orange')

//criando o nosso proprio filtro
$('.cars_list li:carsCentury21').css('font-size', '30px')

$('.cars_list li:carsBeforeyear(1990)').css('color', 'orange')