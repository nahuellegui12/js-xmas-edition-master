// const $form = document.querySelector("#carta-a-santa");
// const nombre = $form.nombre.value;
// nombre = document.querySelector('[name=nombre]').value;
// const ciudad = $form.ciudad.value;
// const comportamiento = $form.comportamiento.value;
// const descripcionRegalo = $form["descripcion-regalo"].value;

// console.log(nombre);
// console.log(ciudad);
// console.log(comportamiento);
// console.log(descripcionRegalo);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menor 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo validar ciudad no puede estar vacio";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length >= 100) {
    return "El texto de la descripcion es muy largo";
  } else if (descripcionRegalo.length === 0) {
    return "La descripcion del regalo no puede estar vacia";
  } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)){
    return "El texto de la descripcion solo puede tener numeros y letras"
  } else {
    return "";
  }
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");
  //nombre = document.querySelector('[name=nombre]').value;
  const ciudad = $form.ciudad.value;
  const comportamiento = $form.comportamiento.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;
  
  const errorNombre = validarNombre($form.nombre.value);
  const errorCiudad = validarCiudad(ciudad)

  manejarErrores([errorNombre, errorCiudad]);

  event.preventDefault();
}

function manejarErrores(errores) {
  errorNombre = errores[0]; //nombre
  errorCiudad = errores[1]; //ciudad

  if (errorNombre) {
    $form.nombre.className = "error";
  } else {
    $form.nombre.className = "";
  }
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;

const objeto = {
  nombre: "Nahuel",
  apellido: "Leguizamon"
}

console.log(objeto.nombre);

console.log(objeto["nombre"]);

objeto.profesion = "Desarrollador";
console.log(objeto);

delete objeto.profesion;

console.log(objeto);

const miObjeto = {
  p1: "Hola",
  p2: function(){ console.log("Holap2") },
  p3: 123,
  p4: {
    p5: "Holap5"
  },
  p6: [{p7: "Holap7"}]
};