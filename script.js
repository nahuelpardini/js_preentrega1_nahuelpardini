const plazo = {
    pesos:{
        categ: "Pesos",        
        tasa: 0.75,
        montoMinimo: 1500,
        mensajeError: "El monto minimo en pesos debe ser 1500",
        mensajeErrorTiempo: "Su inversión debe ser mayor a 30 y menor que 365 días",
    },

    dolar:{
        categ: "Dolares",
        tasa: 0.005,
        montoMinimo: 500,
        mensajeError: "El monto minimo en dolares debe ser 500",
        mensajeErrorTiempo: "Su inversión debe ser mayor a 30 y menor que 365 días",
    }
};  



//DESACTIVO RADIO DOLAR CUANDO VALUE ES 2
function desactivar (){
    let valorRadioUno = document.radioFormUno.radioUno.value;
    let radioDolar = document.getElementById("radioDolar");    
    radioDolar.disabled = valorRadioUno == 2;
}

let formUno = document.getElementById("radioFormUno");
formUno.onclick = desactivar;



//CALCULA LA GANANCIA DEL PLAZO FIJO
function calculoDefault(boton){
    let inversion = document.getElementById("inversion").value; //DEFINIR EL MONTO A INVERTIR
    let tasa = document.mainFormDos.radioDos.value == 1 ? plazo.pesos.tasa : plazo.dolar.tasa; // DEFINO LA TASA
    let moneda = document.mainFormDos.radioDos.value == 1 ? plazo.pesos.categ : plazo.dolar.categ; // DEFINO LA MONEDA
    let valorRadioDos = document.mainFormDos.radioDos.value;

    
    if (valorRadioDos == 1  && inversion < plazo.pesos.montoMinimo){
        return errorMonto.innerHTML = plazo.pesos.mensajeError.toUpperCase();
    }

    else if (valorRadioDos == 2 && inversion < plazo.dolar.montoMinimo){
        return errorMonto.innerHTML = plazo.dolar.mensajeError.toUpperCase();
    }

    else {
        errorMonto.innerHTML = " ";
        
    } 
    

    let dias = boton.dataset.valor;
    result = inversion * tasa / 365 * dias;
    inversionx.innerHTML = "Invirtiendo " + inversion;
    ganancia.innerHTML = "Su ganancia será de " + result.toFixed(0) + " " + moneda;
    tasax.innerHTML = "La tasa es: " + tasa;
    diasx.innerHTML = "Inviertiendo: " + dias + " días";
    

}


function template(){
    temp.innerHTML =
        `
        <h2>Ingrese un nuevo plazo</h2>
        <input type="number" id="masDias" class="form-control mt-2">
        <div id="errorTemp" style="font-size:13px; color: tomato;"></div>
        <button onclick="calculoTemp()" class="btn btn-outline-primary mt-2">CALCULAR</button>`
    }

    function calculoTemp (){
        
        let inversion = document.getElementById("inversion").value; //DEFINIR EL MONTO A INVERTIR
        let masDias = document.getElementById("masDias").value;
        let tasa = document.mainFormDos.radioDos.value == 1 ? plazo.pesos.tasa : plazo.dolar.tasa; // DEFINO LA TASA
        let moneda = document.mainFormDos.radioDos.value == 1 ? plazo.pesos.categ : plazo.dolar.categ; // DEFINO LA MONEDA
        let valorRadioDos = document.mainFormDos.radioDos.value;

    if (valorRadioDos == 1  && inversion < plazo.pesos.montoMinimo){
        return errorMonto.innerHTML = plazo.pesos.mensajeError.toUpperCase();
    }

    else if (valorRadioDos == 2 && inversion < plazo.dolar.montoMinimo){
        return errorMonto.innerHTML = plazo.dolar.mensajeError.toUpperCase();
    }

    else if (masDias < 30 || masDias > 365){
        return errorTemp.innerHTML = plazo.pesos.mensajeErrorTiempo.toUpperCase();
    }

    else {
        errorMonto.innerHTML = " ";
        errorTemp.innerHTML = " ";
    } 
    
    
    result = inversion * tasa / 365 * masDias;
    inversionx.innerHTML = "Invirtiendo " + inversion + " a " + masDias + " días";
    ganancia.innerHTML = "Su ganancia será de " + result.toFixed(0) + " " + moneda;
    tasax.innerHTML = "La tasa es: " + tasa;
    diasx.innerHTML = "Inviertiendo: " + masDias + " días";
    }