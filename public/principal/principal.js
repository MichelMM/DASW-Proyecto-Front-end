let array = [];
document.addEventListener("DOMContentLoaded", () => {
    verTodo();
});

function verTodo() {
    array = [];
    OperadorRequest(null, verOperadores());
    MaquinariaRequest(null, verMaquinas());

    array.push(arrayMaquinas);
    array.push(arrayOperadores);
    fill();
}

let arrayMaquinas = [];
let arrayOperadores = [];

function verMaquinas() {
    arrayMaquinas = [];
    document.getElementById("tabla").innerHTML = "";
    let maquinas = JSON.parse(localStorage.Maquinaria);
    for (let maquina in maquinas) {
        let HTMLMaquina = `<table width=100%>
            <tr>
                <td rowspan="5"><img width="200px" src="${maquinas[maquina].img}" alt=""></td>
                <td>Equipo:</td>
                <td>${maquinas[maquina].type}</td>
            </tr>
            <tr>
                <td>Fabricante/Modelo:</td>
                <td>${maquinas[maquina].dealer} ${maquinas[maquina].model}</td>
            </tr>
            <tr>
                <td>Renta</td>
                <td>Hora: $${maquinas[maquina].hourCost}/ Día:$${maquinas[maquina].dayCost} /Semana: $${maquinas[maquina].weekCost}</td>
            </tr>
            <tr>
                <td>Incluye transporte:</td>
                <td>${maquinas[maquina].transport}</td>
            </tr>
            <tr>
                <td><button onclick=verMaquina(${maquinas[maquina].id}) type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                        autocomplete="off">Ver</button></td>
            </tr>
    
        </table>`;
        arrayMaquinas.push(HTMLMaquina);
    }
}

function verOperadores() {
    arrayOperadores = [];
    document.getElementById("tabla").innerHTML = "";
    let operadores = JSON.parse(localStorage.operadores);
    for (let operador in operadores) {
        if (operadores[operador].status == "active") {
            let HTMLOperador = `<table width=100%>
            <tr>
                <td rowspan="5"><img width="200px"
                        src="${operadores[operador].operatorIMG}" alt=""></td>
                <td>Nombre:</td>
                <td>${operadores[operador].name} ${operadores[operador].lastname}</td>
            </tr>
            <tr>
                <td>Años de Experiencia:</td>
                <td>${operadores[operador].yearsExperience} años</td>
            </tr>
            <tr>
                <td>Disponibilidad:</td>
                <td>${operadores[operador].available}</td>
            </tr>
            <tr>
                <td><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                        autocomplete="off" onclick=verOperador(${operadores[operador].id})>Ver</button></td>
            </tr>
            
            </table>`;
            arrayOperadores.push(HTMLOperador);
        }
    }
}



function fill() {
    document.getElementById("tabla").innerHTML = array.join("");
}

function fillMaquinas() {
    document.getElementById("tabla").innerHTML = arrayMaquinas.join("");
}

function fillOperadores() {
    document.getElementById("tabla").innerHTML = arrayOperadores.join("");
}

function OperadorRequest(object, cbOk) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Operador`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(object)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("operadores", xhr.responseText);
            cbOk();
        }
    };
}

function MaquinariaRequest(object, cbOk) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Maquinaria`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(object)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("Maquinaria", xhr.responseText);
            cbOk();
        }
    };
}

function verOperador(key) {
    for (let i = 0; i < JSON.parse(localStorage.operadores).length; i++) {
        if (JSON.parse(localStorage.operadores)[i].id == key) {
            localStorage.operador = JSON.stringify(JSON.parse(localStorage.operadores)[i]);
            window.location.href = "./candidato";
        }
    }

}

function verMaquina(key) {
    for (let i = 0; i < JSON.parse(localStorage.Maquinaria).length; i++) {
        if (JSON.parse(localStorage.Maquinaria)[i].id == key) {
            localStorage.maquina = JSON.stringify(JSON.parse(localStorage.Maquinaria)[i]);
            window.location.href = "./maquinaria";
        }
    }

}
let arraysearch = [];

function busqueda() {
    arraysearch = []
    event.preventDefault();
    document.getElementById("tipo3").click();
    if (document.getElementById("searchO").value != "" && document.getElementById("searchM").value != "") {
        alert("Favor de solo llenar uno de los dos campos");
    } else if (document.getElementById("searchO").value == "" && document.getElementById("searchM").value == "") {
        verTodo();
    } else if (document.getElementById("searchO").value != "") {
        let temp = JSON.parse(localStorage.operadores);
        for (let key in temp) {
            if ((temp[key].name.search(document.getElementById("searchO").value) == 0 || temp[key].lastname.search(document.getElementById("searchO").value) == 0) && temp[key].status == "active") {
                let HTMLOperador = `<table width=100%>
            <tr>
                <td rowspan="5"><img width="200px"
                        src="${temp[key].operatorIMG}" alt=""></td>
                <td>Nombre:</td>
                <td>${temp[key].name} ${temp[key].lastname}</td>
            </tr>
            <tr>
                <td>Años de Experiencia:</td>
                <td>${temp[key].yearsExperience} años</td>
            </tr>
            <tr>
                <td>Disponibilidad:</td>
                <td>${temp[key].available}</td>
            </tr>
            <tr>
                <td><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                        autocomplete="off" onclick=verOperador(${temp[key].id})>Ver</button></td>
            </tr>
            
            </table>`;
                arraysearch.push(HTMLOperador);
            }
            document.getElementById("tabla").innerHTML = arraysearch.join("");
        }

    } else if (document.getElementById("searchM").value != "") {
        let temp = JSON.parse(localStorage.Maquinaria);
        for (let key in temp) {
            if (temp[key].type.search(document.getElementById("searchM").value) == 0){
                let HTMLMaquina = `<table width=100%>
            <tr>
                <td rowspan="5"><img width="200px" src="${temp[key].img}" alt=""></td>
                <td>Equipo:</td>
                <td>${temp[key].type}</td>
            </tr>
            <tr>
                <td>Fabricante/Modelo:</td>
                <td>${temp[key].dealer} ${temp[key].model}</td>
            </tr>
            <tr>
                <td>Renta</td>
                <td>Hora: $${temp[key].hourCost}/ Día:$${temp[key].dayCost} /Semana: $${temp[key].weekCost}</td>
            </tr>
            <tr>
                <td>Incluye transporte:</td>
                <td>${temp[key].transport}</td>
            </tr>
            <tr>
                <td><button onclick=verMaquina(${temp[key].id}) type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                        autocomplete="off">Ver</button></td>
            </tr>
    
        </table>`;
            arraysearch.push(HTMLMaquina);
            }
            
        }
        document.getElementById("tabla").innerHTML = arraysearch.join("");
    }

}