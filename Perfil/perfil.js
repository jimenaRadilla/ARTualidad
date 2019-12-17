// alert("sss")

let NombreUsuario = document.getElementById("usNAME")
let Password = document.getElementById("Pass")
let botonEntrar = document.getElementById("ButEntrar")

let johanHTML= document.getElementById("johanHTML")

const miNOMusuario = "johan.n"
const miPassword = "45E4"

let validarUS = () => {
    if (NombreUsuario.value === miNOMusuario && Password.value===miPassword) {
           johanHTML.href = "johan.html"
           console.log("cambio")
    } else {
        alert("No")
    }
}

botonEntrar.addEventListener ("click", validarUS  )