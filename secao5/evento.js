//Delegação de Eventos
$('#books_list tbody').on('click', 'td', function(e){
    
    $('#books_list tbody td').removeClass('trselected')

    $(this).addClass('trselected')

    })
    $('#btn_add_book').on('click', function(){
        let tr =`
        <tr>
            <td>Til</td>
            <td>José de alencar</td>
        </tr>
        `
        $('#books_list tbody').append(tr)
    })

//Propagação de Eventos
//mudou td para tr
//adicionar delegateTarget
$('#books_list tbody').on('click', 'tr', function(e){
    $(e.delegateTarget).find('tr').removeClass('trselected')

    $(this).addClass('trselected')

    })
    $('#btn_add_book').on('click', function(){
        let tr =`
        <tr>
            <td>Til</td>
            <td>José de alencar</td>
        </tr>
        `
        $('#books_list tbody').append(tr)
    })

//Parando a progação de eventos
    //antes
    $('#form_login').on('change','[name]',function(){
        alert('elemento mudou, Seu valor: ' + $(this).val())
    })
    //aplicando outro evento sem influência do evento anterior
    $('#form_login [name=bio]').on('change', function(event){
        event.stopPropagation();
        $(this).css('background', 'red')

    })
//retirando evento de um elemento
    let entries = 100
    $('.register').append(`<u> -Ainda restam ${100 - entries} vagas </u>`)

    $('#form_login [type=submit]').on('click', function(e){
        e.preventDefault()
        alert('Você foi cadastrado, Parabéns')
    })
    if (entries >= 100){
        $('#form_login [type=submit]').off('click')
    }

    //Executando evento apenas uma vez
    //one
    $('.books').append('<u> - Marque seus favoritos (Essa ação não pode ser desfeita)</u>')

    $('#books_list tbody tr').one('click', function(){
        if(!$(this).hasClass('trselected')){
            $(this).addClass('trselected')
        }else{
            $(this).removeClass('trselected')
        }
    })

    //acionando um evento manualmente
    $('h1').trigger('dblclick')

    $('#form_login').on('submit', function(event){
        //parar o padrão
        event.preventDefault();
        console.log('Aqui estão os valores do formulario', $(this).serializeArray())
    })

    $('#form_login [name=bio]').on('blur', function(e){
        $(e.target.form).trigger('submit')
    })

    //criando evento Personalizados

    $('header').on('initPage', function(){
        $(this).find('h1').append('-Seja bem vindo').css({
            color:'blue',
            left:'100px'
        })
        $(this.find('img').animate({
            width:'400px'
        }))

        setTimeout(function(){
            $('header').trigger('initPage')
        }, 1500)
        
    })

    //criando namespaces
    $('p').on('click.colorRed', function(){
        $(this).toggleClass('selected_section')
    })

    $('p').on('click', function(){
        $(this).toggleClass('underline_section')
        
    })

    $('#btn-remove_css_color').on('click', function(){
        $('p').off('click.colorRede')
    })