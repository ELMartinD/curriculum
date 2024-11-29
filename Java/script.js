let menuVisible = false;
//Funcion para ocultar o mostrar el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //Ocultar el menu una vez que se selecciona una de las opciones
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Fioncion para las animaciones de skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("photoshop");
        habilidades[1].classList.add("aftereffects");
        habilidades[2].classList.add("premiere");
        habilidades[3].classList.add("muse");
        habilidades[4].classList.add("illustrator");
        habilidades[5].classList.add("audition");
        habilidades[6].classList.add("cinema");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("escucha");
        habilidades[9].classList.add("lectura");
        habilidades[10].classList.add("escritura");
        habilidades[11].classList.add("conversacion");
        habilidades[12].classList.add("javascript");
        habilidades[13].classList.add("python");
        habilidades[14].classList.add("html");
        habilidades[15].classList.add("office");
        habilidades[16].classList.add("outlook");
        habilidades[17].classList.add("publisher");
        habilidades[18].classList.add("access");
        habilidades[19].classList.add("word");
        habilidades[20].classList.add("powerpoint");
        habilidades[21].classList.add("excel");
    }
}
//Scroll para las animaciones y que lo detecte
window.onscroll = function(){
    efectoHabilidades();
} 