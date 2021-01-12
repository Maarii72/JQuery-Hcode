$('#init_effect').on('click', function(){
    $('.logo').animate({
        marginTop:'+=90px'
    })
    .delay(500)
    .animate({
        marginLeft: '+=300px'
    })
    // queue faz que as outras não sejam executadas, entende-se que a fila acabou com a aplicação do método 
    .queue(function(){
        $('h1').text('Animação concluida').css({
            'color': 'red'
        })
        //faz que a fila continue
        $(this).dequeue()
    })
    //.clearQueue()  limpa a fila de animações
    .delay(1000)
    .fadeOut(2000)
})