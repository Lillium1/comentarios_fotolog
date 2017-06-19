function iniciar(){ 
	var guardar = document.getElementById("guardar");
	guardar.addEventListener("click", datos);
	cajita();
}

function datos(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	localStorage.setItem(clave,valor);
	cajita();
	// borrar datos
	document.getElementById("clave").value = "";
	document.getElementById("valor").value = "";
}

function cajita(){
	var post = document.getElementById("ale"); 
	post.innerHTML = "";

	for(var i = 0; i < localStorage.length; i++){
		var llave = localStorage.key(i); 
		var itemLLave = localStorage.getItem(llave); 

		var divi = document.createElement("div"); 
		divi.classList.add("claseDivi");
		
		var tituloLLave = document.createTextNode(llave);
		var titulo = document.createElement("h4");
		titulo.classList.add("claseTitulo");
		titulo.appendChild(tituloLLave);
		 
		var texto = document.createTextNode(itemLLave);
		var comentario = document.createElement("p");
		comentario.classList.add("claseComentario");
		comentario.appendChild(texto);

		divi.appendChild(titulo); 
    	divi.appendChild(comentario);  
    	post.appendChild(divi); 
	}
}
iniciar();


var borrar = document.getElementById("borrar");	
borrar.addEventListener("click", borrarPost);

function borrarPost(){
	window.localStorage.clear(); 
	cajita();
}
