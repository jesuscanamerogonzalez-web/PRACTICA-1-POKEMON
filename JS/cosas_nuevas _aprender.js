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

Aquí tienes las funciones y métodos esenciales divididos por su tarea específica:

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



