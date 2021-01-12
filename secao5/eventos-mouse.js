//evento para quando pressionar o mouse
$('h1').mousedown(function(){
    console.log('Apertei o mouse')
    })

//evento para quando soltar o mouse
$('h1').mouseup(function(){
    console.log('soltei o mouse')
    })

//evento para quando soltar e apertar o mouse
$('h1').click(function(){
    console.log('apertei e soltei o mouse')
    })

    $('h3.books').click(function(){
        //$('h3.books')
        $(this).text('fui clicado')
    })

    //simulando o clique de um botão
    $('h3.books').click()

    /////////////////

    //evento para o botão direito do mouse
    $('img').contextmenu(function(){
        alert('clicamos com o botão direito')
        })

        //simular evento para o botão direito
        $('img').contextmenu()

     //evento para o duplo click
     $('table tbody tr').dblclick(function(){
        $(this).css({
          background:'black',
          color: 'white' 
        })
    })

    //simular evento para duplo click
    $('table tbody tr:eq(0)').dblclick()

////////parte 2 Cursor////////////

 //evento para o mouse passa por cima
 $('table tbody tr').mouseenter(function(){
    $(this).addClass('trselected');
   
    })
     //o cursor sai de cima
     $('table tbody tr').mouseleave(function(){
        $(this).removeClass('trselected')
})

//agrupar dois eventos mouseenter e mouseleave
$('table tbody tr').houver(function(){
    $(this).addClass('trselected');
}, function(){
    $(this).removeClass('trselected');

});

//evento para quando o mouse se movimenta dentro da pag
$('table tbody tr').mousemove(function(event){
    event.pageX, event.pageY
    $('h1').text(`posição x: ${event.pageX}; posição Y: ${event.pageY}`);
 
}) 