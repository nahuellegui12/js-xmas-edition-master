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
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;
  
  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    "descripcion-regalo": errorDescripcionRegalo,
    nombre: errorNombre,
    ciudad: errorCiudad
  }

  console.log(errores);

  const esExito = manejarErrores(errores) === 0; //manejarErrores me va  devolver la cantidad de errores con un maximo de 3, Se hace la comparacion y devuelve true or false

  console.log(esExito);

  if(esExito){
    $form.className = "oculto";
    document.querySelector('#exito').className = "";
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores) //[nombre, ciudad, descripcionRegalo] Me devuelve un array
  const $errores = document.querySelector('#errores')
  let cantidadDeErrores = 0;

  keys.forEach(function(key){
    const error = errores[key]

    if(error){
      cantidadDeErrores++;
      $form[key].className = "error";

      const $error = document.createElement('li');
      $error.innerText = error;
      $errores.appendChild($error); 
    }else{
      $form[key].className = ""
    }
  })

  document.querySelector("#errores").remove
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
