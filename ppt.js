
function inicio(){
    alert("¡¡¡BIENVENIDO AL JUEGO!!!\n es el tipico juego de piedra papel o tijera");
    alert("instrucciones:\n-La piedra le gana a las tijeras, pero pierde contra el papel\n-El papel le gana a la piedra, pero pierde contra las tijeras\n-Las tijeras le ganan al papel, pero pierde contra la piedra");
}
function mensaje(){
    alert("Precione la imagen segun la opcion que usted quiera");
}
function bot(opc){
    switch(opc){
        case 1:
            document.getElementById('blanco2').src="piedra.png";
        break;
        case 2:
            document.getElementById('blanco2').src="papel.png";
        break
        case 3:
            document.getElementById('blanco2').src="tijeras.png";
        break;
        default:
        break;
    }
}
function comparar(ju,bo){
    if(ju==bo){
        alert("¡¡¡Los dos han escojido lo mismo!!!");
    }else if(ju==1&&bo==2){
        alert("¡¡¡El bot gana!!!");
    }else if(ju==1&&bo==3){
        alert("¡¡¡El jugador gana!!!");
    }else if(ju==2&&bo==1){
        alert("¡¡¡El jugador gana!!!");
    }else if(ju==2&&bo==3){
        alert("¡¡¡El bot gana!!!");
    }else if(ju==3&&bo==1){
        alert("¡¡¡El bot gana!!!");
    }else if(ju==3&&bo==2){
        alert("¡¡¡El jugador gana!!!");
    }
}


