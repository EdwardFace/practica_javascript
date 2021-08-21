window.addEventListener('load',()=>{
    

    let formulario = document.querySelector("#formulario");
    let box_shared = document.querySelector("#datos");

    box_shared.style.display = "none";

   formulario.addEventListener('submit',(e)=>{

        e.preventDefault();
        let nombre = document.querySelector("#nom").value;
        let apellido = document.querySelector("#apell").value;
        let edad = parseInt(document.querySelector("#edad").value);

        

        if(validarFormulario(nombre,apellido,edad) == false){
            return false;
        }


        box_shared.style.display = "inline-block";
        
        
        let p_nombre = document.querySelector("#p_nombre span");
        let p_apellidos = document.querySelector("#p_apellidos span");
        let p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellido;
        p_edad.innerHTML = edad;
        
        
       
   });

   return false;
});

function validarFormulario(nom,apell,edad){
    if(nom.trim() == "" || nom.trim().length == 0){
        document.querySelector("#err_nombre").style.display = "inline";
        return false; 
    }else{
        document.querySelector("#err_nombre").style.display = "none";
    }

    if(apell.trim() == "" || apell.trim().length == 0){
        document.querySelector("#err_apellidos").style.display = "inline";
        return false;
    }else{
        document.querySelector("#err_apellidos").style.display = "none";
    }

    if(edad == "" || edad<0 || isNaN(edad)){
        document.querySelector("#err_edad").style.display = "inline";
        return false;
    }else{
        document.querySelector("#err_edad").style.display = "none";
    }

    return true;
}