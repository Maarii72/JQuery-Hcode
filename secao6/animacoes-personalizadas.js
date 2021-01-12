//criando animações personalizadas
$('h1').animate({
    fontSize: '50px'
})

$('.course_item h4').on('click', function(){
    $(this).animate({
        worSpacing: '+=5px'
    }, 200)
})

$('.course_item h4').on('click', function(){
    $(this).animate({
        padding: '+=20px'
    }, 1500)
})

$('footer p').on('click', function(){
    $(this).animate({
        letterSpacing: '+=10px'
    }, 2000, function(){
        alert('Aumentou o espaçamento das letras')
    })
})

