// no false para somente a animação atual, então é definido true

$('#stop_effect').on('click',function(){
    //parando uma animação
   // $('.logo').stop(true, true)

   $('.logo').finish()
})