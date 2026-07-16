JAVASCRIPT EN ESTE DOCUMENTO JS SE EXPLICAN LAS FUNCIONES OPERACIONES Y PROPIEDADES BASICAS DE JAVASCRIPT Y SU SINTAXIS


//DECLARAR VARIABLES Y CONSTANTES

En JavaScript, una variable es un contenedor que almacena un valor que puede cambiar durante la ejecución del programa mientras que una constante es un contenedor que almacena un valor que no puede cambiar. Puedes declarar variables y constantes utilizando las palabras clave `let`, `const` y `var`. La elección entre ellas depende del comportamiento que desees para la variable.
Para declararla y mostrarla en consola se hace de la siguiente manera:

APARTE DE ESTO PONIENDO UN IGUAL SE LE PUDE ASIGNAR UN VALOR A LA VARIABLE O CONSTANTE AUNQUE ESTO ES MAS PROPIO DE LAS CONSTANTES YA QUE LAS VARIABLES PUEDEN CAMBIAR SU VALOR Y LAS CONSTANTES NO.

const constante1 = "Hola, soy una constante";
console.log(constante1);

var variable1 = "Hola, soy una variable";
console.log(variable1);

let variable2 = "Hola, soy otra variable";
console.log(variable2);

//OPERACIONES MATEMATICAS CON VARIABLES Y CONSTANTES BASICAS

              //SUMAR VARIABLES Y CONSTANTES









              //RELLENAR


              //CONDICIONALES IF ELSE Y SWITCH

              IF ELSE ES EL MAS BASICO DE LOS CONDICIONALES Y ESTE VALOR NO ES IGUAL/MAYOR/MENOR O DISTINTO DE ESTE EN VEZ DE DECIR ESTO DIRA ESTO OTRO

              let num1 = 10;
              if (num1 > 5) {
              console.log("El número es mayor que 5");
              } else {
              console.log("El número es menor o igual a 5");
              }

              SWITCH ES UN CONDICIONAL QUE SE UTILIZA PARA COMPARAR UNA VARIABLE O EXPRESIÓN CON VARIOS VALORES POSIBLES. CADA VALOR POSIBLE SE DEFINE EN UN BLOQUE CASE, Y SI LA VARIABLE O EXPRESIÓN COINCIDE CON ESE VALOR, SE EJECUTA EL CÓDIGO DENTRO DE ESE BLOQUE. SI NINGUNO DE LOS CASE COINCIDE, SE PUEDE INCLUIR UN BLOQUE DEFAULT QUE SE EJECUTARÁ COMO OPCIÓN POR DEFECTO.
              let dia = "martes";
              switch (dia) {
              case "lunes":
              console.log("Hoy es lunes");
              break;
              case "martes":
              console.log("Hoy es martes");
              break;
              default:
              console.log("No es un día válido");
              }

                //BUCLES WHILE Y FOR

                WHILE CON SU ESTRUCTURA (condición) SE UTILIZA PARA REPETIR UN BLOQUE DE CÓDIGO MIENTRAS UNA CONDICIÓN SEA VERDADERA. SE EJECUTA EL BLOQUE DE CÓDIGO Y LUEGO SE EVALÚA LA CONDICIÓN.

                let contador = 1;
                while (contador <= 3) {
                console.log(contador); // Imprime 1, luego 2, luego 3
                contador++; // Si no incrementas esto, el bucle será infinito y bloqueará tu navegador
                }


                FOR CON SU ESTRUCTURA (inicialización; condición; actualización) SE UTILIZA PARA REPETIR UN BLOQUE DE CÓDIGO UN NÚMERO DETERMINADO DE VECES. SE INICIALIZA UNA VARIABLE, SE EVALÚA LA CONDICIÓN Y SE ACTUALIZA LA VARIABLE EN CADA ITERACIÓN.

                for (let i = 1; i <= 3; i++) {
                console.log(i); // Imprime 1, luego 2, luego 3
                }


ARRAY

Un array (o arreglo) en JavaScript es una estructura de datos que permite almacenar múltiples valores en una sola variable. 
Funciona como una lista ordenada donde cada elemento ocupa una posición numérica específica llamada índice (que siempre comienza en 0)  

EJEMPLO  
 Un array de strings
const frutas = ["manzana", "plátano", "naranja"];

Un array con diferentes tipos de datos
const mixto = [42, "Hola", true, { nombre: "Ana" }];








SINTAXIS Y ATRIBUTOS

let numeros = [1, 2, 3];
numeros.push(4);  Añade
numeros.pop();  Elimina el último
numeros.includes(2); // true - comprueba si incluye


DOM DOCUMENT OBJECT MODELMANIPULACION DE OBJETOS DE HMTL Y CSS


Para interactuar con HTML y CSS desde JavaScript, el navegador nos proporciona el DOM (Document Object Model). Este modelo traduce la página web en un árbol de objetos que JavaScript puede modificar en tiempo real.

Funciones y métodos esenciales divididos por su tarea específica:

1. Seleccionar elementos (Buscar en el HTML)Antes de modificar algo, debes decirle a JavaScript qué elemento quieres cambiar.


        - document.querySelector(): Selecciona el primer elemento que coincida con un selector CSS (clase, ID o etiqueta). Es el más utilizado por su versatilidad.document.

        - querySelectorAll(): Selecciona todos los elementos que coincidan con el selector CSS y devuelve una lista.document.

        - getElementById(): Selecciona un elemento específico mediante su atributo id. Es muy rápido y eficiente.javascriptconst boton =
        


        EJEMPLOS:
        document.- querySelector('.btn-principal'); // Por clase CSS
        const titulos = document.querySelectorAll('h2');        // Todos los H2
        const contenedor = document.getElementById('menu');     // Por ID




2. Modificar contenido y estructura HTMLEstas propiedades y métodos te permiten cambiar el texto, los bloques de código o crear nuevos elementos.

        - element.textContent: Modifica o devuelve el texto plano de un elemento. Es seguro contra ataques de código malicioso.
        - element.innerHTML: Modifica o devuelve el código HTML interno. Útil para insertar etiquetas completas.
        - document.createElement(): Crea un nuevo elemento HTML en la memoria que luego puedes insertar en la página.
        - element.appendChild(): Inserta un nuevo elemento como el último hijo de otro.
 
        EJEMPLOS:
        const parrafo = document.querySelector ('#texto');
        parrafo.textContent = "Nuevo texto para el usuario."; // Cambia el texto
        const nuevoDiv = document.createElement('div');       // Crea un <div>
        document.body.appendChild(nuevoDiv); // Lo añade al final de la página


3. Modificar estilos y clases CSSJavaScript puede alterar el diseño de la página de dos formas: cambiando estilos directamente en la etiqueta o gestionando clases CSS (la práctica más recomendada).

        - element.classList.add(): Añade una o más clases CSS al elemento.
        - element.classList.remove(): Elimina clases CSS del elemento.
        - element.classList.toggle(): Alterna una clase. Si existe la quita, si no existe la añade (ideal para menús desplegables o modos oscuros).
        - element.style.propiedad: Modifica estilos en línea directamente (ej. element.style.backgroundColor). Las propiedades CSS compuestas usan formato camelCase.

        EJEMPLO:

        connst tarjeta = document.querySelector('.tarjeta');


        tarjeta.classList.add('activa');               // Aplica los estilos de la clase .activa
        tarjeta.style.color = 'red';                   // Cambia el color del texto a rojo directamente
        tarjeta.style.marginTop = '20px';              // margin-top en CSS pasa a ser marginTop

4. Escuchar eventos (Hacer la página interactiva)Los eventos permiten que JavaScript reaccione a lo que hace el usuario (clics, scroll, pulsar teclas).

- element.addEventListener(): Vincula una función de respuesta a un evento específico del usuario.

        EJEMPLO:
        
        const botonEnviar = document.querySelector('#enviar');

        // Cuando el usuario hace clic, se ejecuta el código interno
        botonEnviar.addEventListener('click', () => {
            alert("Formulario enviado con éxito");
        });



