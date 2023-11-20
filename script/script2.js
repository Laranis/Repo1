

let boton = document.getElementById("contactame");
boton.addEventListener("click", function(){
   let titulo = document.getElementById("enviar");
   titulo.style.color= "green" 
})

let campoNombre = document.getElementById("nombre");
campoNombre.addEventListener("keydown", function(){
campoNombre.style.borderColor = "orange"
}
)

let campoTelefono = document.getElementById("telefono");
campoTelefono.addEventListener("keydown", function(){
campoTelefono.style.borderColor = "orange"
}
)

let campoEmail = document.getElementById("email");
campoEmail.addEventListener("keydown", function(){
campoEmail.style.borderColor = "orange"
}
)