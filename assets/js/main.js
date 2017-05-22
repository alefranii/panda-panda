
(function salir(){
	var pandas = Array.from(document.querySelectorAll('.panda span'));
	
	pandas.forEach(function(element){
		element.addEventListener('click', function(){
			this.parentElement.classList.add('salir');
		});
	});
})()





//boton origen el texto de la izquierda debe desaparecer y al hacer click de nuevo debe reaparecer.
//boton extencion el texto de la derecha debe desaparecer y al hacer click de nuevo debe reaparecer.
//boton restaurar fotos deben volver a aparecer todas las fotos.
//extra, personalizar estilo y uso de estructura de datos para las fotos de los pandas

