//JAVASCRIPT


//OPERACIONES MATEMATICAS CON VARIABLES Y CONSTANTES BASICAS

              //SUMAR VARIABLES Y CONSTANTES
                              const valor1 =1
                              const valor2=5
                              let suma1= valor1 + valor2
                              return (suma1)
                              console.log(suma1)

              //RESTAR VARIABLES Y CONSTANTES
                              const valor1 =1
                              const valor2=5
                              let resta= valor1 - valor2
                              return (resta1)
                              console.log(resta1)


              //MULTIPLICAR VARIABLES Y CONSTANTES

                              const valor1 =1
                              const valor2=5
                              let multi1= valor1 * valor2
                              return (multi1)
                              console.log(multi1)


              //DIVIDIR VARIABLES Y CONSTANTES

                            const valor1 =1
                            const valor2=5
                            let div1= valor1 / valor2
                            return (div1)
                            console.log(div1)



//ARRAY + propiedades (variables que tienen varios valores listados)

              //con numeros y letras
              let variablearrayuno = [1, "numero3",5];
              console.log(variablearrayuno);


              //con variables que se refieran a numeros --SIEMPRE aquí el array al final las variables que van dentro deben de ir primero--

              let uno = 1;
              let ochentaydos = 82;
              let cincuentaytres = 13;
              let variablearraydos = [uno , ochentaydos , cincuentaytres];
              console.log(variablearraydos);


              //Crear el array vacio para luego rellenar 

      //         let arraypararellenar = [no tiente que tener nada dentro solo[] y nada mas]
      //         arraypararellenar[posicion del valor en numeros desde el 0] = "texto" o numeros
      //        arraypararellenar[posicion del valor en numeros desde el 0] = "texto" o numeros
      //          arraypararellenar[posicion del valor en numeros desde el 0] = "texto" o numeros;




              let arraypararellenar = []
                arraypararellenar[1] = "Cañamero"
                arraypararellenar[2] = "Gonzalez"
                arraypararellenar[0] = "Jesús";

              console.log(arraypararellenar);

              

              //En este caso quedará vacio el espacio ya que no empezamos por el cero

              let arraypararellenardos = []
                arraypararellenardos[1] = "Jesus"
                arraypararellenardos[3] = "Gonzalez"
                arraypararellenardos[4] = "Cañamero";

              console.log(arraypararellenardos);

              //PROPIEDADES ADCIONALES DE ARRAY

              //ARRAY PUSH --Añade campos--

                let arraypararellenartres = []
                arraypararellenartres[1] = "Cañamero"
                arraypararellenartres[2] = "Gonzalez"
                arraypararellenartres[0] = "Jesús";


                arraypararellenartres.push("apellido 3")
                arraypararellenartres.push("apellido 4")
                console.log(arraypararellenartres);

              //ARRAY POP --elimina el ultimo campo--

              let arraypararellenarcuatro = []
                arraypararellenarcuatro[1] = "Cañamero"
                arraypararellenarcuatro[2] = "Gonzalez"
                arraypararellenarcuatro[0] = "Jesús";
                //PRE POP
                  console.log(arraypararellenarcuatro);
              //POST POP
                  arraypararellenarcuatro.pop();
                      console.log(arraypararellenarcuatro);

              //LENGHT te dice cuantas espacios ocupados hay

            console.log(arraypararellenarcuatro.length);

              //SPLICE SELECIONA LOS ESPACIOS LLENOS SELECIONADOS
            arraypararellenar.splice(1,2,"esto es por un splice")
            console.log(arraypararellenar);

            arraypararellenar.splice(0,1,"esto es por un segundo splice")
            console.log(arraypararellenar);

            //PARA BORRAR TODO SIMPLEMENTE HAY QUE DECLARAR LA VARIABLE SIN NADA
            arraypararellenar=[]
            console.log(arraypararellenar)


