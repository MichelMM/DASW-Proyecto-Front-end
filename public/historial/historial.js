let arrayContratacionesOperadores = [];
let arrayContratacionesMaquinaria = [];

document.addEventListener("DOMContentLoaded", function () {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    ContratacionOperadorRequest(usuario[0].name, () => {
        let ContratacionesOperadores = JSON.parse(localStorage.getItem("contratacionesOperadores"));
        for (let contratacionOperador in ContratacionesOperadores) {
            let HTMLcontratacionOperador = `<table width=100%>
            <tr>
                <td rowspan="5" width="20%"><img width="200px"
                        src="${ContratacionesOperadores[contratacionOperador].Operador.image}" alt=""></td>

                <td align="left" width="50%">
                    <ul class="list-group">
                        <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesOperadores[contratacionOperador].Operador.name}</li>
                        <li class="list-group-item"> <b>Ciudad</b> ${ContratacionesOperadores[contratacionOperador].Operador.city} </li>
                        <li class="list-group-item"><b>Estado:</b> ${ContratacionesOperadores[contratacionOperador].Operador.state}</li>
                        <li class="list-group-item"><b>Fecha inicio:</b> ${ContratacionesOperadores[contratacionOperador].beginContractDate} </li>
                        <li class="list-group-item"><b>Fecha fin:</b> ${ContratacionesOperadores[contratacionOperador].endContractDate}</li>
                        <li class="list-group-item"><b>Fecha de pago:</b> ${ContratacionesOperadores[contratacionOperador].PaymentDay}</li>
                        <a name="" id="" class="btn btn-primary" href="#" role="button">Ver</a>
                    </ul>
                </td>
                <td></td>
            </tr>
        </table>`
            arrayContratacionesOperadores.push(HTMLcontratacionOperador);
        }
        contratacionesOperadoresFill();
    }, () => {
        console.log("No tienes contrataciones");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    ContratacionMaquinaRequest(usuario[0].name, () => {
        let ContratacionesMaquinas = JSON.parse(localStorage.getItem("contratacionesMaquinas"));
        console.log(ContratacionesMaquinas);
        for (let contratacionMaquina in ContratacionesMaquinas) {
            let HTMLcontratacionMaquina = `<table width=100%>
            <tr>
                <td rowspan="5" width="20%"><img width="200px"
                        src="${ContratacionesMaquinas[contratacionMaquina].Maquina.image}" alt="">
                </td>
                <td  width="100%">
                    <ul class="list-group">
                        <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesMaquinas[contratacionMaquina].Maquina.type}</li>
                        <li class="list-group-item"> <b>Fabricante:</b> ${ContratacionesMaquinas[contratacionMaquina].Maquina.dealer}</li>
                        <li class="list-group-item"><b>Modelo:</b> ${ContratacionesMaquinas[contratacionMaquina].Maquina.model}</li>
                        <li class="list-group-item"><b>Ciudad:</b> ${ContratacionesMaquinas[contratacionMaquina].Contratista.city}</li>
                        <li class="list-group-item"><b>Fecha inicio:</b> ${ContratacionesMaquinas[contratacionMaquina].beginContractDate}</li>
                        <li class="list-group-item"><b>Fecha fin:</b> ${ContratacionesMaquinas[contratacionMaquina].endContractDate}</li>
                        <li class="list-group-item"><b>Fecha de pago:</b> ${ContratacionesMaquinas[contratacionMaquina].PaymentDay}</li>
                        <a name="" id="" class="btn btn-primary" href="#" role="button">Ver</a>
                    </ul>
                </td>
            </tr>
        </table> `
            arrayContratacionesMaquinaria.push(HTMLcontratacionMaquina);
        }
        contratacionesMaquinasFill();
    }, () => {
        console.log("No tienes contrataciones");
    });
});

function contratacionesOperadoresFill() {
    document.getElementById("listaOperadoresContratados").innerHTML = arrayContratacionesOperadores.join("");
}

function contratacionesMaquinasFill() {
    document.getElementById("listaMaquinasContratadas").innerHTML = arrayContratacionesMaquinaria.join("");
}

function ContratacionOperadorRequest(object, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/contratacionesOperador?Contratista.name_like=${object}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(null);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("contratacionesOperadores", xhr.responseText);
            console.log(xhr.response);
            cbOk();
        }
    };
}

function ContratacionMaquinaRequest(object, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/contratacionesMaquina?Contratista.name_like=${object}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(null);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("contratacionesMaquinas", xhr.responseText);
            console.log(xhr.response);
            cbOk();
        }
    };
}