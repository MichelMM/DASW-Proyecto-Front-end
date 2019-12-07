let btnRegistrarMaquina = document.getElementById("registroMaquina");
let formMaquinaria = document.getElementById("formMaquinaria");

formMaquinaria.addEventListener("change", camposMaquinaria);

function camposMaquinaria(){
    let notValid = formMaquinaria.querySelectorAll(":invalid");
    let valid = formMaquinaria.querySelectorAll(":valid");
    console.log(formMaquinaria);
    notValid.forEach(function (element){
        element.style.border = '1px solid #ff0000';
        formMaquinaria.querySelector('button').disabled = true;
    });
    if(notValid.length != 0){
        formMaquinaria.querySelector('button').disabled = true;
    }else{
        formMaquinaria.querySelector('button').disabled = false;
    }

    valid.forEach(function(element){
        element.style.border = '1px solid #ced4da';
    });
}

btnRegistrarMaquina.addEventListener("click", function(event){
    event.preventDefault();
    let objeto={
        id: document.getElementById("inputID").value,
        type: document.getElementById("inputMachine").value,
        dealer: document.getElementById("inputDealer").value,
        model: document.getElementById("inputModel").value,
        specifications: document.getElementById("inputPDF").value,
        description: document.getElementById("inputDesc").value,
        img: document.getElementById("inputImg").value,
        hourCost:document.getElementById("inputHour").value,
        dayCost:document.getElementById("inputDay").value,
        weekCost:document.getElementById("inputWeek").value,
        transport: document.getElementById("inputTransport").value,
        units: 1
    }
    registrarMaquina(objeto);
})

function registrarMaquina(datos){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/Maquinaria");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 201) {
            alert('Error, no se ha podido registrar la máquina');
        } else {
            alert("La máquina ha sido registrada con éxito");
            
        }
    };
}