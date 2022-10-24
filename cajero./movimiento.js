usuario = prompt ("Elige:1 para depositar dinero, 2 para retirar dinero, 3 para consultar saldo, 4 para salir ")

alert("¿cuanto dinero depositará?")

usuausuario = prompt (" Elige: 1 para 50000, 2 para 100000, 3 para 200000,  4 para otro valor ")
    
    
function elecciondeposito(deposito){
    let(valor) = ""
    if(deposito == 1){
        valor= "Depositara 50000"
    }else if (deposito == 2){
        valor ="Depositara 100000"
    }else if (deposito == 3){
        valor="Depositara 200000"
    }else {
        valor ="Depositara: " + valor
    }
    
    return valor

}


alert("Eligio:  " + elecciondeposito)

    

    

/*
}else if(usuario == 2) {
    alert("¿cuanto dinero retirará?")
}else if(usuario== 3){
    alert("su saldo actual es:  " + sss)
}else if(usuario== 4){
    alert("Fue un gusto ayudarte")

}else {
    alert( "No elegiste ninguna opción")
}
*/