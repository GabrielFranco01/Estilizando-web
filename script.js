function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 8

msg.innerHTML = ` Agora são ${hora} horas`
 if (hora >= 0 && hora <12){
    //bom dia.
    img.src = 'fotomanha.png.jpg'

} else if(hora >= 12 && hora <=18){
    //Boa tarde
    img.src = 'fototarde.png.jpg'
} else {
    //Boa noite
    img.src = 'fotonoite.png.jpg'
}

}
