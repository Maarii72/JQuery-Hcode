//clonando um elemento
let el = $('title').clone(true);
$('.title').click(function(){
    $(this).css('outline','5px solid red');
})

let el =$('.title').clone(true)
el.appendTo('section main')