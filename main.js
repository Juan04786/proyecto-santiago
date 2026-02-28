function confirmarAcceso (){
const USUARIO = "Juan Osorio";
const CONTRASEÑA = "JK123456";
let numeroIntentos = 0;
while (numeroIntentos > 3) {
    let usurioIngresado = prompt ("Ingresa tu usuario");
    let contraseñaIngresada = prompt ("Ingresa tu contraseña");
    if (usurioIngresado === USUARIO && contraseñaIngresada === CONSTRASEÑA) {
        console.log("Bievenido al sistema")
        break;

    } else {
        numeroIntentos++;
        console.log("Datos incorrectos. Intento ${numeroIntentos} de 3")
    }   
}   
if (numeroIntentos===3) {
    console.log("Usuario bloqueado. ha superado el número de intentos.")
}
}
confirmarAcceso()