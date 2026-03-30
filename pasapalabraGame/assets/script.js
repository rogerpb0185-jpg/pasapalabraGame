window.addEventListener("DOMContentLoaded", ()=>{
    //total preguntas del juego
    const TOTAL_PREGUNTAS = 12;

    //Variable que me lleva la cantidad de respuestas acertadas
    var cantidadAcertadas = 0;

    //Variable que controla la pregunta actual. Comienza en -1, porque la primera pregunta es la 0 
    var numPreguntaActual = -1;

    //Voy a necesitar una estructura para saber una pregunta se ha respondido y cual no
    //Lo vamos a mantener en un arreglo, i:0 indica que no se ha respondido, 1 indica que si
    //se ha respondido.
    //Coloco la cantidad de preguntas que hay, en este caso puse 12
    var estadoPreguntas = [0,0,0,0,0,0,0,0,0,0,0,0]; 



    //creamos la base de datos de preguntas
    const bancoPreguntas = [
        
        {
            id:"A",
            pregunta:"¿Secuela de ciencia ficción y acción de 1986 en la que aparece la actriz sigourney weaver?",
            respuesta:"alien el regreso"
        },
        {
            id:"A",
            pregunta:"¿Una persona que utiliza plataformas digitales y evita compartir información personal que pueda identificarla?",
            respuesta:"anonimo"
        },
        {
            id:"A",
            pregunta:"¿En qué lugares se reúnen personas para discutir temas de interés común?",
            respuesta:"asamblea"
        },
        {
            id:"A",
            pregunta:"¿Qué banda de rock lanzó varios éxitos en los años 90, como 'I Don't Want to Miss a Thing'?",
            respuesta:"aerosmith"
        },
        {
            id:"A",
            pregunta:"¿Quién es el legendario mediocampista del FC Barcelona y de la selección española?",
            respuesta:"andres iniesta"
        },
        {
            id:"B",
            pregunta:"¿Quién escribió 'Drácula', el famoso autor irlandés?",
            respuesta:"bram stoker"
        },
        {
            id:"B",
            pregunta:"¿Como se llama el heroe español que denfendió cartagena de indias en 1741?",
            respuesta:"blas de lezo"
        },
        {
            id:"B",
            pregunta:"¿Superheroe que interpreta a un murcielago?",
            respuesta:"batman"
        },
        {    id:"B",
            pregunta:"¿Qué hidrocarburo se utiliza como combustible en hogares y encendedores?",
            respuesta:"butano"
        },
        {    id:"B",
            pregunta:"¿Cuál es la ciudad más conocida del estado de Massachusetts?",
            respuesta:"boston"
        },
        {
            id:"C",
            pregunta:"¿Cuál es la unidad central de procesamiento de un ordenador?",
            respuesta:"cpu"
        },
        {
            id:"C",
            pregunta:"¿Es un camino cerrado por el que fluye corriente eléctrica, generalmente a través de cables?",
            respuesta:"circuito"
        },
        {
            id:"C",
            pregunta:"¿Cuál es la desarrolladora de la franquicia de videojuegos Mega Man?",
            respuesta:"capcom"
        },
        {
            id:"C",
            pregunta:"¿Cuál es el personaje de la película 'Child's Play' que ha sido representado en varios muñecos?",
            respuesta:"chucky"
        },
        {
            id:"C",
            pregunta:"¿Qué superhéroe de Marvel tiene figuras de acción populares en juegos y colecciones?",
            respuesta:"capitan america"
        },
        {
            id:"D",
            pregunta:"¿Videojuego de plataformas en 2D lanzado en 1994 por sega megadrive, en la que manejamos una marioneta?",
            respuesta:"dynamite headdy"
        },
        {
            id:"D",
            pregunta:"¿Personaje super héroe que interpretó Liam Neeson en los años 90?",
            respuesta:"darkman"
        },
        {
            id:"D",
            pregunta:"¿Qué gas incoloro e inodoro resulta de la respiración y la combustión?",
            respuesta:"dioxido de carbono"
        },
        {
            id:"D",
            pregunta:"¿Qué agente de limpieza se utiliza para eliminar suciedad y manchas?",
            respuesta:"detergente"
        },
        {
            id:"D",
            pregunta:"¿Vehículo aéreo no tripulado utilizado para fotografía aérea, entrega de paquetes y más?",
            respuesta:"dron"
        },
        {
            id:"E",
            pregunta:"¿Insulto que se refiere a una persona poseida por el demonio o que actua sin razón y con furia?",
            respuesta:"energumeno"
        },
        {
            id:"E",
            pregunta:"¿Acto de eliminar completamente a un grupo de organismos, ya sean humanos , animales o plantas?",
            respuesta:"exterminación"
        },
        {
            id:"E",
            pregunta:"Software que ejecuta programas de un sistema operativo en otro, comúnmente para juegos de consolas.",
            respuesta:"emulador"
        },
        {
            id:"E",
            pregunta:"¿Sustancia que, al ser detonada, genera una rápida liberación de energía, incluyendo la pólvora?.",
            respuesta:"explosivo"
        },
        {
            id:"E",
            pregunta:"¿Líquidos concentrados de plantas o alimentos, utilizados en cocina, medicina y cosméticos?",
            respuesta:"extractos"
        },
        {
            id:"F",
            pregunta:"¿País asiático cuya capital es Manila?",
            respuesta:"filipinas"
        },
        {
            id:"F",
            pregunta:"¿Quien fundo en 1939 una marca icónica de automóviles deportivos de lujo, es conocido por su color rojo?",
            respuesta:"ferrari"
        },
        {
            id:"F",
            pregunta:"¿Dispositivos que separan sólidos de líquidos o impurezas, permitiendo el paso solo de líquidos?",
            respuesta:"filtros"
        },
        {
            id:"F",
            pregunta:"¿Dispositivos que convierten y suministran energía eléctrica a otros componentes electrónicos?",
            respuesta:"fuente de alimentacion"
        },
        {
            id:"F",
            pregunta:"¿película de Los años 80 drama musical sobre una joven que sueña con ser bailarina profesional?",
            respuesta:"flashdance"
        },
        {
            id:"G",
            pregunta:"¿Cuál es la bebida alcohólica destilada, con aromatizado con bayas de enebro?",
            respuesta:"ginebra"
        },
        {
            id:"G",
            pregunta:"¿Se realizan cálculos complejos y procesar gráficos, especialmente en videojuegos y aplicaciones de diseño?",
            respuesta:"gpu"
        },
        {
            id:"G",
            pregunta:"¿El primer libro de la Biblia, que narra la creación del mundo y las historias de los patriarcas?",
            respuesta:"genesis"
        },
        {
            id:"G",
            pregunta:"¿película de los 80 Mezcla de comedia y terror sobre criaturas traviesas que causan estragos en una ciudad?",
            respuesta:"gremlins"
        },
        {
            id:"G",
            pregunta:"¿Ave domesticada, comúnmente criada por sus huevos y carne?",
            respuesta:"gallina"
        },
        {
            id:"H",
            pregunta:"¿Como se llama los flujos de una cpu?",
            respuesta:"hilos"
        },
        {
            id:"H",
            pregunta:"¿A que  se refiere a una familia de robots o seres que imitan las características humanas?",
            respuesta:"humanoides"
        },
        {
            id:"H",
            pregunta:"¿Creación de alta expectativa o emoción sobre un evento o producto, a menudo mediante marketing?",
            respuesta:"hype"
        },
        {
            id:"H",
            pregunta:"¿ Una popular serie de películas basada en los libros de J.K. Rowling sobre un joven mago?",
            respuesta:"harry potter"
        },
        {
            id:"H",
            pregunta:"¿Sustancias químicas producidas por glándulas, que regulan diversas funciones en el cuerpo?",
            respuesta:"hormonas"
        },
        {
            id:"I",
            pregunta:"¿Que siglas son las de Proveedor de Servicios de Internet?",
            respuesta:"isp"
        },
        {
            id:"I",
            pregunta:"¿Videojuego de fútbol de los años 90, lanzado por Konami, se convirtió en un clásico de la época?",
            respuesta:"international superstar soccer"
        },
        {
            id:"I",
            pregunta:"¿Sustancias químicas utilizadas para controlar o eliminar insectos?",
            respuesta:"insecticidas"
        },
        {
            id:"I",
            pregunta:"¿Átomos o moléculas que tienen una carga eléctrica, ya sea positiva o negativa?",
            respuesta:"iones"
        },
        {
            id:"I",
            pregunta:"¿Un medicamento antiinflamatorio no esteroideo usado para reducir fiebre y dolor?",
            respuesta:"ibuprofeno"
        },
        {
            id:"J",
            pregunta:"¿Guadalajara es una ciudad de mexicana, capital del estado de..?",
            respuesta:"jalisco"
        },
        {
            id:"J",
            pregunta:"¿Una prenda de vestir, típicamente de punto, que se usa principalmente en la parte superior del cuerpo?",
            respuesta:"jersey"
        },
        {
            id:"J",
            pregunta:"¿Película de los 90 donde un juego de mesa cobra vida y causa caos?",
            respuesta:"jumanji"
        },
        {
            id:"J",
            pregunta:"¿Líquidos extraídos de frutas o verduras, ricos en nutrientes?",
            respuesta:"jugos"
        },
        {
            id:"J",
            pregunta:"¿Una raíz utilizada como especia y medicina por sus propiedades antiinflamatorias?",
            respuesta:"jenjibre"
        },
        {
            id:"K",
            pregunta:"¿Cómo se llama el núcleo del sistema operativo de Linux?",
            respuesta:"kernel"
        },
        {
            id:"K",
            pregunta:"¿Un arte marcial japonés que se centra en golpes, patadas y técnicas de autodefensa?",
            respuesta:"karate"
        },
        {
            id:"K",
            pregunta:"¿Unidad de frecuencia usada en electrónica para medir ciclos por segundo?",
            respuesta:"kilohercio"
        },
        {
            id:"K",
            pregunta:"¿Película de un joven que aprende karate para defenderse del bullying y adaptarse a su nueva vida?",
            respuesta:"karate kid"
        },
        {
            id:"K",
            pregunta:"¿Quién es una joven valiente que sueña con ser guerrera y desafía las expectativas de su pueblo?",
            respuesta:"kamala"
        },
        {
            id:"L",
            pregunta:"¿Aceite que reduce la fricción en el motor?",
            respuesta:"lubricante"
        },
        {
            id:"L",
            pregunta:"¿Qué tecnología utilizan las impresoras para imprimir documentos rápidamente y con alta calidad?",
            respuesta:"laser"
        },
        {
            id:"L",
            pregunta:"¿Qué tipo de formato óptico de almacenamiento fue utilizado para video y audio en los años 80 y 90?",
            respuesta:"laserdisc"
        },
        {
            id:"L",
            pregunta:"¿Qué dispositivo se utiliza en iluminación y pantallas por su eficiencia energética?",
            respuesta:"led"
        },
        {
            id:"L",
            pregunta:"¿Qué clásico videojuego de aventuras involucra completar misiones y derrotar enemigos?",
            respuesta:"legend of zelda"
        }  
    ]
   
    //generamos en cada letra más preguntas.
    //cada letra tendra 5 preguntas diferentes, lo puedes ver en el array  const bancoPreguntas =
   function generarJuego(){

    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L"];
    let juego = [];

    letras.forEach(letra => {

        let opciones = bancoPreguntas.filter(p => p.id === letra);

        let random = Math.floor(Math.random() * opciones.length);

        juego.push(opciones[random]);

    });

    return juego;
}

   let bd_juego = generarJuego();

    

    //Variables para controlar el tiempo
    const timer = document.getElementById("tiempo-estimado");
    //Tiempo estimado del juego en segundos
    const TIEMPO_DEL_JUEGO = 300;
    //Variable que indica el tiempo restante
    let timeLeft = TIEMPO_DEL_JUEGO;
    //variable que maneja el contador
    var countdown;



    //Creamos las letras de la A a la L de forma circular
    const container = document.querySelector(".caja__contador-tiempo");
    for(let i=1; i<= TOTAL_PREGUNTAS; i++){
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.textContent = String.fromCharCode(i + 64);
        circle.id = String.fromCharCode(i + 64);
        container.appendChild(circle);

        const angle = ((i-1) / TOTAL_PREGUNTAS) * Math.PI * 2 - (Math.PI/2);
        const x = Math.round(95 + 120 * Math.cos(angle));
        const y = Math.round(95 + 120 * Math.sin(angle));
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }
    //boton de comenzar
    var comenzar = document.getElementById("primerjuego");
    comenzar.addEventListener("click", function(event){
        document.getElementById("pantalla-inicial").style.display = "none";
        document.getElementById("pantalla-juego").style.display = "block";
        document.getElementById("respuesta").focus();
        
    //largamos el tiempo
    largarTiempo();
    cargarPregunta();
    });

    function largarTiempo(){
        countdown = setInterval(()=> {
        //restar un segundo al tiempo
        timeLeft--; 
        //actualizamos el texto del cronometro on el tiempo restante
        timer.innerText = timeLeft;

        //Si el tiempo llega a 0, detener el cronometro
        if(timeLeft<=0){
            clearInterval(countdown);
            mostrarPantallaFinal();
        }
    },1000);
}
        
    //función que carga la pregunta
      function cargarPregunta(){
            numPreguntaActual++;
        //Crontolo si he llegado al final de las preguntas, para iniciar de nuevo
        if(numPreguntaActual >= TOTAL_PREGUNTAS){
            numPreguntaActual = 0;
        }
    
        //Debo de controlar que todavía hallan preguntas para contestar
        //Es decir ver si en el arreglo estadoPreguntas existe algun 0 
        if(estadoPreguntas.indexOf(0)>=0){
            //Ahora debo buscar cual todas es la que esta sin responder, es decir buscar el
            //primer 0 del arreglo 
            while(estadoPreguntas[numPreguntaActual]==1){
                numPreguntaActual++;
                if(numPreguntaActual>=TOTAL_PREGUNTAS){
                    numPreguntaActual = 0;
                }
            }
            //Ahora si busco la pregunta en la base de datos de las preguntas
            document.getElementById("letra-pregunta").textContent = bd_juego[numPreguntaActual].id;
            document.getElementById("pregunta").textContent = bd_juego[numPreguntaActual].pregunta; 
            var letra = bd_juego[numPreguntaActual].id;
            document.getElementById(letra).classList.add("pregunta-actual");
        }else{//Significa que ya se han respondido todas las preguntas
            clearInterval(countdown);
            mostrarPantallaFinal();
        }
    };    
        //Detectamos cada vez que haya un cambio en el input para ver cuando se presiona ENTER 
        //Y controlar si lo que ingreso es correcto o no.
        var respuesta = document.getElementById("respuesta");
        respuesta.addEventListener("keyup", function(event){
            //Detecto si se presiono
            if(event.keyCode === 13){
                if(respuesta.value==""){//si presiono enter y este vacio
                    alert("Debe ingresar un valor");
                    return;
                }
            

            //obtengo la respuesta ingresada
            var txtRespuesta = respuesta.value;
            controlarRespuesta(txtRespuesta.toLowerCase());
            }
        });

       

    function controlarRespuesta(txtRespuesta){
        //Controlo si la respuesta es correcta
        if(txtRespuesta == bd_juego[numPreguntaActual].respuesta){
            //alert("respuesta correcta");
            cantidadAcertadas++;
        
            //actualizo el estado de la pregunta actual a 1, para indicar que ya esta respondido.
            estadoPreguntas[numPreguntaActual] = 1;

            var letra = bd_juego[numPreguntaActual].id;
            document.getElementById(letra).classList.remove("pregunta-actual");
            document.getElementById(letra).classList.add("bien-respondida");
            console.log("bien-respondida")
        }else{
            estadoPreguntas[numPreguntaActual] = 1;
            var letra = bd_juego[numPreguntaActual].id;
            document.getElementById(letra).classList.remove("pregunta-actual");
            document.getElementById(letra).classList.add("mal-respondida");
            console.log("mal-respondida")
        }

        //Limpiamos el input
        respuesta.value="";
        //Cargamos la proxima pregunta
        cargarPregunta();

    }

    //boton de responder pregunta
  const btnResponder = document.getElementById("responder");
  const inputRespuesta = document.getElementById("respuesta");

btnResponder.addEventListener("click", function(){
    document.getElementById("respuesta").focus();
    console.log("respuesta");

    controlarRespuesta(inputRespuesta.value);
});   

    //boton para pasar de pregunta sin contestar(boton pasapalabra)
    var pasar = document.getElementById("pasar");
    pasar.addEventListener("click", function(event){
        var letra = bd_juego[numPreguntaActual].id;
        document.getElementById(letra).classList.remove("pregunta-actual");
        document.getElementById("respuesta").focus();

        cargarPregunta();
    });

    // Crear la función que se encargará de actualizar el cronómetro cada segundo
        function largarTiempo(){
        countdown = setInterval(() => {
    // Restar un segundo al tiempo restante
        timeLeft--;
  
    // Actualizar el texto del cronómetro con el tiempo restante
        timer.innerText = timeLeft;
  
    // Si el tiempo llega a 0, detener el cronómetro
        if (timeLeft < 0) {
            clearInterval(countdown);
            mostrarPantallaFinal();
        }
    }, 1000);
}

    //Muestro la pantalla final
    function mostrarPantallaFinal(){
        document.getElementById("acertadas").textContent = cantidadAcertadas;
        document.getElementById("score").textContent = (cantidadAcertadas*100)/12 + "% de aciertos";
        document.getElementById("pantalla-juego").style.display = "none";
        document.getElementById("pantalla-final").style.display = "block";
    }

    //boton para volver iniciar el juego de pasapalabra
    var recomenzar = document.getElementById("recomenzar");
    recomenzar.addEventListener("click", function(event) {
        bd_juego = generarJuego(); 
        numPreguntaActual = -1;
        timeLeft = TIEMPO_DEL_JUEGO;
        timer.innerText = timeLeft;
        cantidadAcertadas = 0;
        estadoPreguntas = [0,0,0,0,0,0,0,0,0,0,0,0];

  //quito las clases de los circulos
  var circulos = document.getElementsByClassName("circle");
  for(i=0;i<circulos.length;i++){
    circulos[i].classList.remove("pregunta-actual");
    circulos[i].classList.remove("bien-respondida");
    circulos[i].classList.remove("mal-respondida");
  }

  document.getElementById("pantalla-final").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  respuesta.value="";
  
  largarTiempo();
  cargarPregunta();
  
});

});
