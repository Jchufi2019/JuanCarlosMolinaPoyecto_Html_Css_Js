function uno(){
    alert("Desea comprar alguno de nuestros artículos");
    alert("Picha encima de la foto y te llevará a la página de compra");
    document.getElementById("imagpc").src='../Img/caja1.jpg';
    setTimeout(function(){dos();}, 4000);
}

function dos(){
    document.getElementById("imagpc").src='../Img/impresora.jpg';
    setTimeout(function(){tres();}, 4000);
}

function tres(){
    document.getElementById("imagpc").src='../Img/auriculares.jpg';
    setTimeout(function(){uno();}, 4000);
}


function validarForm(){
    var n= document.forms["formulario"]["nombre"].value;
     var c= document.forms["formulario"]["correo"].value;
     var t= document.forms["formulario"]["telefono"].value;
    
    if(n==""){
        alert("Debe rellenar el campo nombre");
        return false;
        
    }
    if(c==""){
        alert("Debe rellenar el campo correo");
        return false;
        
    }
   if(t==""){
        alert("Debe rellenar el campo teléfono");
        return false;
        
    }
    
    if(document.formulario.Consultoria.checked==true && document.formulario.Desarrollo.checked ==false &&  document.formulario.Pedidos.checked ==false &&  document.formulario.Otros.checked ==false || document.formulario.Consultoria.checked==false && document.formulario.Desarrollo.checked ==true &&  document.formulario.Pedidos.checked ==false &&  document.formulario.Otros.checked ==false || document.formulario.Consultoria.checked==false &&  document.formulario.Desarrollo.checked ==false &&  document.formulario.Pedidos.checked ==true &&  document.formulario.Otros.checked ==false ||  document.formulario.Consultoria.checked==false && document.formulario.Desarrollo.checked ==false &&  document.formulario.Pedidos.checked ==false &&  document.formulario.Otros.checked ==true){
        return true;
    } else {
        alert("Debe seleccionar un asunto");
        return false;
    }

    alert("Se ha enviado el correo correctamente. Muchas Gracias");
   return true;
}

