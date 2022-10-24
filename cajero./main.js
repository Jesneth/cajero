class Usuario {
    constructor(n,usuario,contraseña,saldo,){
        
        this.nombre = nombre;
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.saldo=saldo;
    }

}
    
let usuarios = [
    sophie= new Usuario(Sophie, 'sophie11', 's1234', 2000000),
    emanuel= new Usuario(Emanuel, 'emanuel16', 'e5678',3000000),
    mariana= new Usuario(Mariana, 'mariana22', 'm9012',2500000),
]

function bienvenida() {
    console.log('Hola, mi nombre es ', this.nombre)
}