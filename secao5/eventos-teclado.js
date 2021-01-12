//KEYPRESS IDENTIFICA MAIUSCU NÃO IDENTIFICA TECLAS ESPECIAIS SHIFT ESC
//Evento para quando pressionarmos uma tecla
$('#form-login [name=username]').keydown(function(event){
    console.log(`Keydown -voce apetou a tecla com um código ${event.keyCode}`)
})

//Evento para quando soltarmos uma tecla
$('#form-login [name=username]').keyup(function(event){
    console.log(`Keydown -voce apetou a tecla com um código ${event.keyCode}`)
    //consegue identificar teclas especiais 
})

$('#form_login [name=username]').keypress(function(event){
    console.log(`kEYPRESS _ Você apertou a tecla com um código ${event.keyCode}`)

    //leva em conta se a letra maiscula 
})