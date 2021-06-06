function mudaImagem(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
        if (hora < 12){
            img.src = '/imgs/bomDia.jpg'
            document.body.style.background = '#FFA07A'
    }
        else if (hora < 18){
            img.src = '/imgs/boaTarde.jpg'
            document.body.style.background = '#FF7F50'
    }
        else {
            img.src = '/imgs/boaNoite.jpg'
            document.body.style.background = '#8B8386'
    }
     
}

