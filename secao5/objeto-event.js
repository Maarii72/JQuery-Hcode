//visualizar todos eventos
$('p').click(function(event){
    console.log(event)
})

//retorna o tipo de vento executado
$('p').click(function(event){
    console.log('Você realizou um evento de ' + event.type)
})

//retorna o nome do elemento que clicamos
$('p').click(function(event){
    alert(`Você clicou em uma tag <${event.target.localName}>`)
})

$('p').click(function(event){
    console.log(`Target`, event.target)
})

$('p').click(function(event){
    console.log(`Current Target`, event.currentTarget)
})

//retorna a posição x e y do elemento onde ocorreu o evento
event.pageX, event.pageY

//retorna o código da tecla pressionada
$('[name=bio]').keydown(function(event){
    
   // console.log(e.keyCode)
    console.log(e.which)
})

//retorna o nome da tecla precionada
$('[name=bio]').keydown(function(event){
    
    console.log(e.key)
    
 })

 
 $('[name=bio]').keydown(function(event){
    //para a execução padrão do evento
    e.preventDefault()

    //para a propagação de eventos
    e.stopPropagation()
    
 })