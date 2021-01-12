//Evento para quando o elemento receber o foco
$('[name]').focus(function(){
    $(this).css('background', 'yellow')
})

//Evento para quando o elemento perder o foco
$('[name]').focus(function(){
    alert('Você digitou' + $(this).val())
})

//Evento para quando o elemento receber um foco mesmo que seja um elemento filho
$('.form-group').focusin(function(){
    console.log('Você selecionou um campo')
})
//leva em consideração todas as tags que são filhas do elemento


//Evento para quando o elemento perde um foco mesmo que seja um elemento filho
$('.form-group').focusout(function(){
    console.log('Você selecionou um campo')
})
//leva em consideração todas as tags que são filhas do elemento

////////parte 2//////////

//usado muito em listas, Evento para quando o compo mudar seu valor
$('[name]').change(function(){
    console.log(`valor do campo: ${$(this).val()}`)
})

//Evento para quando selecionarmos o valor de um campo do formulário
$('[name]').select(function(){
    console.log(`você selecionou o valor deste campo`)
})

//selecionar varios valores do campo formulário
$('form').submit(function(){
    //pág não vai atualizar
    event.preventDefault()
    console.log($(this).serializeArray())
})

$('#link_logo').click(function(){
    //pág não vai atualizar
    event.preventDefault()
    $(this).find('img').attr('src', 'img/logo-jquery.png')
})


