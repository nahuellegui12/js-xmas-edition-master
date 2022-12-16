// function probarValidarNombre() {
//   console.assert(
//       validarNombre('') === 'Este campo debe tener al menos 1 caracter',
//       'Validar nombre no validó que el nombre no sea vacío',
//   );

//   console.assert(
//       validarNombre(
//           '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
//       'Este campo debe tener menos de 50 caracteres',
//       'Validar nombre no validó que el nombre sea menor a 50 caracteres',
//   );
// }

function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menor 1 caracter",
    "validarNombre no validó que el nombre no sea vacio"
  );

  console.assert(
    validarNombre(
      "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("123123") === "El campo nombre solo acepta letras",
    "validar nombre no validó que el nombre solo tenga letras"
  );  

  console.assert(
    validarNombre("Fabricio") === "",
    "validarNombre falló con un nombre valido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("Buenos Aires") === "",
    "ValidarCiudad no funciono con un nombre de ciudad valido"
  );

  console.assert(
    validarCiudad("") === "El campo validar ciudad no puede estar vacio",
    "validarCiudad no falló con un campo de ciudad vacio"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") === "La descripcion del regalo no puede estar vacia",
    "La funcion validar descripcion regalo no valido que el campo no esté vacio"
  );
  console.assert(
    validarDescripcionRegalo(
      "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    ) === "El texto de la descripcion es muy largo",
    "La funcion validar descripcion regalo no valido que el campo no sea muy largo"
  );

  console.assert(
    validarDescripcionRegalo("Regalo") === "",
    "La funcion validar descripcion regalo no funciono con una descripcion correcta"
  );

  /*console.assert(
    validarDescripcionRegalo(".,.,.,.,.") === "El texto de la descripcion solo puede tener numeros y letras",
    "La funcion validar descripcion regalo no valido que solo sean numeros y letras"
  )*/
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
