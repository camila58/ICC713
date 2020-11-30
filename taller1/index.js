(function(){
    var lista= document.getElementById("lista"),
        nombre=document.getElementById("name"),
        fecha=document.getElementById("start"),
        mensaje=document.getElementById("comment"),
        btnAgregarComen= document.getElementById("sendMessageButton");
    
    

    var agregarComentario= function(){
        var nom = nombre.value,
            date= fecha.value,
            mensaj=mensaje.value,
            nuevoComentario=document.createElement("li"),
            enlace= document.createElement("a"),
            contenido=document.createTextNode(nom,date,mensaj);
            if(nom==""){
                nom=setAttribute("placeholder","introduccir su nombre")
                nom.className="errror";
                return false;
            }
            enlace.appendChild(contenido);
            enlace.setAttribute("href","#");
            nuevoComentario.appendChild(enlace);
            nom.value="";

            for (var i = 0; i < lista.children.length-1; i++) {
                lista.children[i].addEventListener("click",function(){
                    this.parentNote.removeChild(this);
                })
                
            }
    };
    var combrobar= function(){
        nom.className="";
        nom.setAttribute("placeholder","agregar tu nombre");

    };
    var eliminarComentario=function(){
        this.parentNote.removeChild(this);

    };


    btnAgregarComen.addEventListener("click",agregarComentario);

    nombre.addEventListener("click", combrobar);


    for (var i =0; i < lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click",eliminarComentario);
    }
    mensaje.addEventListener('input', function(e) {
        const target = e.target;
        const longitudMax = target.getAttribute('maxlength');
        const longitudAct = target.value.length;
        contador.innerHTML = `${longitudAct}/${longitudMax}`;
    });
}());


