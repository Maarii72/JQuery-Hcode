
////////Animações Básicas///////
//escondendo um elemento
$('.courses_list div:first').hide(2000)

//exibindo um elemento 
$('.courses_list div:hidden').show(1000)

//exibindo ou escondendo um elemento
$('.courses_list .course_item:eq(2)').toggle(2000)

$('.btn_toggle_item').on('click', function(){

    $(this).prev('.course_item_inner').toggle();

});



/////////Animações de Fadin (opacidade)////

//escondendo elemento com a animação fading
$('.courses_list .course_item:eq(3)').fadeOut('fast')

//exibindo elemento com a animação fading
$('.courses_list .course_item:eq(3)').fadeIn(2000, function(){
    $(this).css('border', 'solid red 2px')
})

//alterando opacidade de um elemento
$('.logo img').fadeTo(1000, 0.5)


$('.btn_toggle_item').on('click', function(){

    $(this).prev('.course_item_inner').fadetoggle('slow', function(){
        console.log('sumi ou apareci')
    });

});

////////Animações de Sliding(deslizar)////////
//Escondendo um elemento com efeito de sliding
$('.courses-list .course_item_inner:eq(4)').slideUp('fast')

//Exibindo um elemento com efeito de sliding
$('.courses-list .course_item_inner:eq(4)').slideDown(1000)

//exibe ou oculta
$('.btn_toggle_item').on('click', function(){

    $(this).prev('.course_item_inner').slideToggle(3000, function(){
        console.log('sumi ou apareci, agora deslizando')
    });

});




////////////desabilitando animações//////////
$('#disable_effects').on('click', function(){
    jQuery.fx.off = !jQuery.fx.off
})