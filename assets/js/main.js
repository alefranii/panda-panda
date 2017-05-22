
(function salir(){
	var pandas = Array.from(document.querySelectorAll('.panda span'));
	
	pandas.forEach(function(element){
		element.addEventListener('click', function(){
			this.parentElement.classList.add('salir');
		});
	});
})()

document.getElementById("origin-izq").addEventListener("click",function(){
	var letraIz = document.getElementById("left");
	letraIz.classList.toggle("display");
})

document.getElementById("extincion-derecha").addEventListener("click",function(){
	var letraDer = document.getElementById("right");
	letraDer.classList.toggle("display");
})





//boton origen el texto de la izquierda debe desaparecer y al hacer click de nuevo debe reaparecer.
//boton extencion el texto de la derecha debe desaparecer y al hacer click de nuevo debe reaparecer.
//boton restaurar fotos deben volver a aparecer todas las fotos.
//extra, personalizar estilo y uso de estructura de datos para las fotos de los pandas

