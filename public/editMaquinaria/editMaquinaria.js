let btnRegistrarMaquina = document.getElementById("registroMaquina");
let formMaquinaria = document.getElementById("formMaquinaria");
let id=localStorage.maquina;
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
GetMaquina();
function GetMaquina(datos){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Maquinaria/${localStorage.maquina}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert('Error, no se ha podido registrar la máquina');
        } else {
            let User=(JSON.parse(xhr.response));
            PrecargarDatos(User);
        }
    };
}
function PrecargarDatos(User){
    document.getElementById("inputID").value=User.id,
    document.getElementById("inputMachine").value=User.type,
    document.getElementById("inputDealer").value=User.dealer,
    document.getElementById("inputModel").value=User.model,
    document.getElementById("inputPDF").value=User.specifications,
    document.getElementById("inputDesc").value=User.description,
    document.getElementById("inputImg").value=User.img,
    document.getElementById("inputUnits").value=User.units,
    document.getElementById("inputHour").value=User.hourCost,
    document.getElementById("inputDay").value=User.dayCost,
    document.getElementById("inputWeek").value=User.weekCost,
    document.getElementById("inputTransport").value=User.transport
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
        units:document.getElementById("inputUnits").value,
        hourCost:document.getElementById("inputHour").value,
        dayCost:document.getElementById("inputDay").value,
        weekCost:document.getElementById("inputWeek").value,
        transport: document.getElementById("inputTransport").value
    }
    UpdateMaquina(objeto);
})

function UpdateMaquina(datos){
    let xhr = new XMLHttpRequest();
    xhr.open('PUT',`http://localhost:3000/Maquinaria/${localStorage.maquina}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert('Error, no se ha podido registrar la máquina');
        } else {
            window.location.href = "./admin";
            alert("La máquina ha sido actualizada con éxito");
        }
    };
}