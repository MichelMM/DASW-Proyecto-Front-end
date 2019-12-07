let arrayOperadores = [];
let arrayContratistas = [];
let arrayMaquinarias = [];
let arrayContraOperador = [];
let arrayContraMaquina = [];
let operadores;
let contratistas;
let maquinarias;
let ContratacionesOperador;
let ContratacionesMaquina;


document.addEventListener("DOMContentLoaded", () => {
    OperadorRequest(null, () => {
        operadores = JSON.parse(localStorage.operadores);
        for (let operador in operadores) {
            let HTMLOperador =
                `<table width=100%>
                        <tr>
                            <td rowspan="5" width="20%"><img width="200px"
                                    src="${operadores[operador].operatorIMG}" alt=""></td>
                            <td align="left" width="50%">
                                <ul class="list-group">
                                    <li class="list-group-item"> <b>Nombre:</b> ${operadores[operador].name} ${operadores[operador].lastname}</li>
                                    <li class="list-group-item"> <b>Años de Experiencia:</b> ${operadores[operador].yearsExperience} años</li>
                                    <li class="list-group-item"><b>Estado:</b> ${operadores[operador].state}</li>
                                    <li class="list-group-item"><b>Ciudad:</b> ${operadores[operador].city}</li>
                                    <li class="list-group-item"><b>Status:</b> ${operadores[operador].status}</li>
                                </ul>
                                 <a href="./mensajes" type="button" class="btn btn-primary btn-rounded" >Contactar</a>
                                <button onclick=ActivarOperador(${operadores[operador].id}) type="button" class="btn btn-primary btn-rounded btn-success">Activar</button>
                                <button onclick=DesactivarOperador(${operadores[operador].id}) type="button" class="btn btn-primary btn-rounded btn-warning">Desactivar</button>
                                <button onclick=DeleteOperador(${operadores[operador].id}) type="button" class="btn btn-primary btn-rounded btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Eliminar</button></<button>
                            </td>
                            <td></td>
                        </tr>
                    </table>
            `
            arrayOperadores.push(HTMLOperador);
        }
        fillOperadores();

    }, () => {
        console.log("No Fue posible cargar contenido")
    });

    ContratistaRequest(null, () => {
        contratistas = JSON.parse(localStorage.contratistas);
        for (let contratista in contratistas) {
            let HTMLContratista =
                `<table>
            <tr>
                <td rowspan="5" width="20%"><img width="200px"
                        src="${contratistas[contratista].img}" alt=""></td>
            
                <td align="left" width="50%">
                    <ul class="list-group">
                        <li class="list-group-item"> <b>Nombre:</b> ${contratistas[contratista].name} ${contratistas[contratista].lastname}</li>
                        <li class="list-group-item"><b>Compañia:</b> ${contratistas[contratista].companyName}</li>
                        <li class="list-group-item"><b>Estado:</b>  ${contratistas[contratista].companyAdd.state}</li>
                        <li class="list-group-item"><b>Ciudad:</b> ${contratistas[contratista].companyAdd.city}</li>
                    </ul>
                    <a href="./mensajes" type="button" class="btn btn-primary btn-rounded" >Contactar</a>
                    <button onclick=DeleteContratista(${contratistas[contratista].id}) type="button" class="btn btn-primary btn-rounded btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Eliminar Contratista</button></<button>
                </td>
                <td>
            
                </td>
            </tr>
            </table>
            `
            arrayContratistas.push(HTMLContratista);
        }
        fillContratistas();

    }, () => {
        console.log("No Fue posible cargar contenido")
    });

    MaquinariaRequest(null, () => {
        maquinarias = JSON.parse(localStorage.maquinarias);
        console.log(maquinarias);
        for (let maquinaria in maquinarias) {
            let HTMLMaquinaria =
                `<table width=100%>
                <tr>
                    <td rowspan="5" width="20%"><img width="200px"
                            src="${maquinarias[maquinaria].img}"
                            alt=""></td>
                    <td align="left" width="50%">
                        <ul class="list-group">
                            <i class="list-group-item"> <b>Nombre:</b> ${maquinarias[maquinaria].type} </i>
                            <li class="list-group-item"><b>Fabricante:</b> ${maquinarias[maquinaria].dealer}</li>
                            <li class="list-group-item"><b>Modelo:</b> ${maquinarias[maquinaria].model}</li>
                            <li class="list-group-item"> <b>Unidades Disponibles:</b> ${maquinarias[maquinaria].units}</li>
                            <li class="list-group-item"><b>Costo por Hora:</b>  ${maquinarias[maquinaria].hourCost}</li>
                            <li class="list-group-item"><b>Costo por Día:</b>  ${maquinarias[maquinaria].dayCost}</li>
                            <li class="list-group-item"><b>Costo por Semana:</b>  ${maquinarias[maquinaria].weekCost}</li>
                            <li class="list-group-item"><b>Transporte:</b>  ${maquinarias[maquinaria].transport}</li>
                        </ul>
                        <button onclick=EditMaquinaria(${maquinarias[maquinaria].id}) type="button" class="btn btn-primary btn-rounded" data-toggle="button" aria-pressed="false" autocomplete="off">Editar Maquinaria</button></<button>
                        <button onclick=DeleteMaquinaria(${maquinarias[maquinaria].id}) type="button" class="btn btn-primary btn-rounded btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Eliminar Maquinaria</button></<button>
                        </td>
                    <td></td>
                </tr>
            </table>
            `
            arrayMaquinarias.push(HTMLMaquinaria);
        }
        fillMaquinarias();

    }, () => {
        console.log("No Fue posible cargar contenido")
    });

    ContratacionesOperadorRequest(null, () => {
        ContratacionesOperador = JSON.parse(localStorage.contratacionesOperador);
        for (let contratacionOperador in ContratacionesOperador) {
            let HTMLcontratacionOperador =
                `
                <div style="background:rgb(250, 248, 248)" class="form-row rounded">
                <table> 
                <th>Compañia: ${ContratacionesOperador[contratacionOperador].Contratista.CompanyName} </th>
                <tr>
                            <td>
                                <ul class="list-group"><b></b>
                                    <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesOperador[contratacionOperador].Contratista.name}</li>
                                    <li class="list-group-item"><b>Estado:</b> ${ContratacionesOperador[contratacionOperador].Contratista.state}</li>
                                    <li class="list-group-item"><b>Ciudad:</b> ${ContratacionesOperador[contratacionOperador].Contratista.city}</li>
                                    <li class="list-group-item"><b>Tarjeta:</b> ${ContratacionesOperador[contratacionOperador].Contratista.payInfo}</li>
                                </ul>
                            </td>
                            <td align="left">
                                <ul class="list-group">Operador
                                <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesOperador[contratacionOperador].Operador.name}</li>
                                <li class="list-group-item"><b>Estado:</b> ${ContratacionesOperador[contratacionOperador].Operador.state}</li>
                                <li class="list-group-item"><b>Ciudad:</b> ${ContratacionesOperador[contratacionOperador].Operador.city}</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-group">Datos de Contratación
                                    <li class="list-group-item"><b>Fecha Contratacion:</b>${ContratacionesOperador[contratacionOperador].beginContractDate}</li>
                                    <li class="list-group-item"><b>Fecha Fin Contratacion:</b>${ContratacionesOperador[contratacionOperador].endContractDate}</li>
                                    <li class="list-group-item"><b>Fecha de Pago:</b>${ContratacionesOperador[contratacionOperador].PaymentDay}</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    </div>
            `
            arrayContraOperador.push(HTMLcontratacionOperador);
        }
        fillContratacionesOperador();

    }, () => {
        console.log("No Fue posible cargar contenido")
    });

    ContratacionesMaquinaRequest(null, () => {
        ContratacionesMaquina = JSON.parse(localStorage.contratacionesMaquina);
        for (let contratacionMaquina in ContratacionesMaquina) {
            let HTMLcontratacionMaquina =
                `
                <div style="background:rgb(250, 248, 248)" class="form-row rounded">
                <table> 
                <th>Compañia: ${ContratacionesMaquina[contratacionMaquina].Contratista.CompanyName} </th>
                <tr>
                            <td>
                                <ul class="list-group"><b>Contratista</b>
                                    <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesMaquina[contratacionMaquina].Contratista.name}</li>
                                    <li class="list-group-item"><b>Estado:</b> ${ContratacionesMaquina[contratacionMaquina].Contratista.state}</li>
                                    <li class="list-group-item"><b>Ciudad:</b> ${ContratacionesMaquina[contratacionMaquina].Contratista.city}</li>
                                    <li class="list-group-item"><b>Tarjeta:</b> ${ContratacionesMaquina[contratacionMaquina].Contratista.payInfo}</li>
                                </ul>
                            </td>
                            <td align="left">
                                <ul class="list-group"><b>Máquina</b>
                                <li class="list-group-item"><b>Nombre:</b> ${ContratacionesMaquina[contratacionMaquina].Maquina.type}<li>
                                <li class="list-group-item"><b>Modelo:</b> ${ContratacionesMaquina[contratacionMaquina].Maquina.model}</li>
                                <li class="list-group-item"><b>Marca:</b> ${ContratacionesMaquina[contratacionMaquina].Maquina.dealer}</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-group"><b>Datos de Contratación</b>
                                    <li class="list-group-item"><b>Fecha Contratacion:</b>${ContratacionesMaquina[contratacionMaquina].beginContractDate}</li>
                                    <li class="list-group-item"><b>Fecha Fin Contratacion:</b>${ContratacionesMaquina[contratacionMaquina].endContractDate}</li>
                                    <li class="list-group-item"><b>Fecha de Pago:</b>${ContratacionesMaquina[contratacionMaquina].PaymentDay}</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    </div>
            `
            arrayContraMaquina.push(HTMLcontratacionMaquina);
        }
        fillContratacionesMaquina();

    }, () => {
        console.log("No Fue posible cargar contenido")
    });
});

function fillOperadores() {
    document.getElementById("divOperadores").innerHTML = arrayOperadores.join("<p></p>");
}

function fillContratistas() {
    document.getElementById("divContratistas").innerHTML = arrayContratistas.join("<p></p>");
}

function fillMaquinarias() {
    document.getElementById("divMaquinarias").innerHTML = arrayMaquinarias.join("<p></p>");
}

function fillContratacionesOperador() {
    document.getElementById("divContratacionesOperador").innerHTML = arrayContraOperador.join("<p></p>");
}

function fillContratacionesMaquina() {
    document.getElementById("divContratacionesMaquinaria").innerHTML = arrayContraMaquina.join("<p></p>");
}

function OperadorRequest(object, cbOk, cbErr) {
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

function ContratistaRequest(object, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Contratista`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(object)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("contratistas", xhr.responseText);
            cbOk();
        }
    };
}

function MaquinariaRequest(object, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Maquinaria`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(object)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("maquinarias", xhr.responseText);
            cbOk();
        }
    };
}

function ContratacionesOperadorRequest(object, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/contratacionesOperador`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(object)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("contratacionesOperador", xhr.responseText);
            cbOk();
        }
    };
}

function ContratacionesMaquinaRequest(object, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/contratacionesMaquina`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(object)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("contratacionesMaquina", xhr.responseText);
            cbOk();
        }
    };
}

function DeleteOperador(key) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
    xhr.open('DELETE', `http://localhost:3000/Operador/${key}`);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('x-auth', localStorage.token);
    xhr.setRequestHeader('x-user-token', localStorage.userToken);
    // 4. Enviar solicitud a la red
    xhr.send(null);
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert("ERROR");
            alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
        } else {
            // Significa que fue exitoso
            window.location.href = "./admin";
            alert("Operador Eliminado");
        }
    };

}

function DesactivarOperador(key) {
    console.log(key)
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
    xhr.open('GET', `http://localhost:3000/Operador/${key}`);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('x-auth', localStorage.token);
    xhr.setRequestHeader('x-user-token', localStorage.userToken);
    // 4. Enviar solicitud a la red
    xhr.send(null);
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert("ERROR");
            alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
        } else {
            // Significa que fue exitoso
            let User = JSON.parse(xhr.response);
            DesactivaOperador(User);
        }
    };
}

function DesactivaOperador(User) {
    User.status = "inactivo";
    event.preventDefault();
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
    xhr.open('PUT', `http://localhost:3000/Operador/${User.id}`);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 4. Enviar solicitud a la red
    xhr.send(JSON.stringify(User));
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert(xhr.status + ':' + xhr.statusText); // e.g. 404: Not Found
        } else {
            alert('El Operador ha sido desactivado con éxito');
        }
    };
}

function ActivarOperador(key) {
    console.log(key)
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
    xhr.open('GET', `http://localhost:3000/Operador/${key}`);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('x-auth', localStorage.token);
    xhr.setRequestHeader('x-user-token', localStorage.userToken);
    // 4. Enviar solicitud a la red
    xhr.send(null);
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert("ERROR");
            alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
        } else {
            // Significa que fue exitoso
            let User = JSON.parse(xhr.response);
            ActivaOperador(User);
        }
    };
}

function ActivaOperador(User) {
    User.status = "active";
    event.preventDefault();
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
    xhr.open('PUT', `http://localhost:3000/Operador/${User.id}`);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    // 4. Enviar solicitud a la red
    xhr.send(JSON.stringify(User));
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert(xhr.status + ':' + xhr.statusText); // e.g. 404: Not Found
        } else {
            alert('El Operador ha sido activado con éxito');
        }
    };
}

function DeleteContratista(key) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
    xhr.open('DELETE', `http://localhost:3000/Contratista/${key}`);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('x-auth', localStorage.token);
    xhr.setRequestHeader('x-user-token', localStorage.userToken);
    // 4. Enviar solicitud a la red
    xhr.send(null);
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert("ERROR");
            alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
        } else {
            // Significa que fue exitoso
            window.location.href = "./admin";
            alert("Contratista Eliminado");
        }
    };

}

function DeleteMaquinaria(key) {
    // 1. Crear XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. Configurar: PUT actualizar archivo
    xhr.open('DELETE', `http://localhost:3000/Maquinaria/${key}`);
    // 3. indicar tipo de datos JSON
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('x-auth', localStorage.token);
    xhr.setRequestHeader('x-user-token', localStorage.userToken);
    // 4. Enviar solicitud a la red
    xhr.send(null);
    // 5. Una vez recibida la respuesta del servidor
    xhr.onload = function () {
        if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
            // Ocurrió un error
            alert("ERROR");
            alert(xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
        } else {
            // Significa que fue exitoso
            window.location.href = "./admin";
            alert("Maquina Eliminada");
        }
    };

}

function EditMaquinaria(key) {
    localStorage.setItem("maquina", key);
    window.location.href = "./editMaquinaria";
}

let arrayOperadoresSearch = [];

function buscarOperador() {
    event.preventDefault();
    arrayOperadoresSearch = [];
    let texto = document.getElementById("operadorSearch");
    if (texto.value == "") {
        fillOperadores();
    } else {
        for (let key in operadores) {
            if (operadores[key].name.search(texto.value) == 0) {
                let HTMLOperador =
                    `<table width=100%>
                        <tr>
                            <td rowspan="5" width="20%"><img width="200px"
                                    src="${operadores[key].operatorIMG}" alt=""></td>
                            <td align="left" width="50%">
                                <ul class="list-group">
                                    <li class="list-group-item"> <b>Nombre:</b> ${operadores[key].name} ${operadores[key].lastname}</li>
                                    <li class="list-group-item"> <b>Años de Experiencia:</b> ${operadores[key].yearsExperience} años</li>
                                    <li class="list-group-item"><b>Estado:</b> ${operadores[key].state}</li>
                                    <li class="list-group-item"><b>Ciudad:</b> ${operadores[key].city}</li>
                                    <li class="list-group-item"><b>Status:</b> ${operadores[key].status}</li>
                                </ul>
                                 <a href="./mensajes" type="button" class="btn btn-primary btn-rounded" >Contactar</a>
                                <button onclick=ActivarOperador(${operadores[key].id}) type="button" class="btn btn-primary btn-rounded btn-success">Activar</button>
                                <button onclick=DesactivarOperador(${operadores[key].id}) type="button" class="btn btn-primary btn-rounded btn-warning">Desactivar</button>
                                <button onclick=DeleteOperador(${operadores[key].id}) type="button" class="btn btn-primary btn-rounded btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Eliminar</button></<button>
                            </td>
                            <td></td>
                        </tr>
                    </table>
            `
                arrayOperadoresSearch.push(HTMLOperador);
            }

        }
        fillOperadoresSearch();
    }

}

function fillOperadoresSearch() {
    document.getElementById("divOperadores").innerHTML = arrayOperadoresSearch.join("");
}


let arrayContratistaSearch = [];

function buscarContratista() {
    event.preventDefault();
    arrayContratistaSearch = [];
    let texto = document.getElementById("SearchContratista");
    if (texto.value == "") {
        fillContratistas();
    } else {
        for (let key in contratistas) {
            if (contratistas[key].companyName.search(texto.value) == 0) {
                let HTMLContratista =
                    `<table>
            <tr>
                <td rowspan="5" width="20%"><img width="200px"
                        src="${contratistas[key].img}" alt=""></td>
            
                <td align="left" width="50%">
                    <ul class="list-group">
                        <li class="list-group-item"> <b>Nombre:</b> ${contratistas[key].name} ${contratistas[key].lastname}</li>
                        <li class="list-group-item"><b>Compañia:</b> ${contratistas[key].companyName}</li>
                        <li class="list-group-item"><b>Estado:</b>  ${contratistas[key].companyAdd.state}</li>
                        <li class="list-group-item"><b>Ciudad:</b> ${contratistas[key].companyAdd.city}</li>
                    </ul>
                    <a href="./mensajes" type="button" class="btn btn-primary btn-rounded" >Contactar</a>
                    <button onclick=DeleteContratista(${contratistas[key].id}) type="button" class="btn btn-primary btn-rounded btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Eliminar Contratista</button></<button>
                </td>
                <td>
            
                </td>
            </tr>
            </table>
            `
                arrayContratistaSearch.push(HTMLContratista);
            }

        }
        fillContratistasSearch();
    }
}

function fillContratistasSearch() {
    document.getElementById("divContratistas").innerHTML = arrayContratistaSearch.join("");
}


let arrayMaquinariasSearch = [];

function buscarMaquinaria() {
    event.preventDefault();
    arrayMaquinariasSearch = [];
    let texto1 = document.getElementById("SearchFabricante");
    let texto2 = document.getElementById("SearchModelo");
    if (texto1.value == "" && texto2.value == "") {
        fillMaquinarias();
    } else if (texto1.value != "" && texto2.value == "") {
        for (let key in maquinarias) {
            if (maquinarias[key].dealer.search(texto1.value) == 0) {
                let HTMLMaquinaria =
                    `<table width=100%>
                <tr>
                    <td rowspan="5" width="20%"><img width="200px"
                            src="${maquinarias[key].img}"
                            alt=""></td>
                    <td align="left" width="50%">
                        <ul class="list-group">
                            <i class="list-group-item"> <b>Nombre:</b> ${maquinarias[key].type} </i>
                            <li class="list-group-item"><b>Fabricante:</b> ${maquinarias[key].dealer}</li>
                            <li class="list-group-item"><b>Modelo:</b> ${maquinarias[key].model}</li>
                            <li class="list-group-item"> <b>Unidades Disponibles:</b> ${maquinarias[key].units}</li>
                            <li class="list-group-item"><b>Costo por Hora:</b>  ${maquinarias[key].hourCost}</li>
                            <li class="list-group-item"><b>Costo por Día:</b>  ${maquinarias[key].dayCost}</li>
                            <li class="list-group-item"><b>Costo por Semana:</b>  ${maquinarias[key].weekCost}</li>
                            <li class="list-group-item"><b>Transporte:</b>  ${maquinarias[key].transport}</li>
                        </ul>
                        <button onclick=EditMaquinaria(${maquinarias[key].id}) type="button" class="btn btn-primary btn-rounded" data-toggle="button" aria-pressed="false" autocomplete="off">Editar Maquinaria</button></<button>
                        <button onclick=DeleteMaquinaria(${maquinarias[key].id}) type="button" class="btn btn-primary btn-rounded btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Eliminar Maquinaria</button></<button>
                        </td>
                    <td></td>
                </tr>
            </table>
            `
                arrayMaquinariasSearch.push(HTMLMaquinaria);
            }

        }
        fillMaquinariasSearch();

    } else if (texto1.value == "" && texto2.value != "") {
        for (let key in maquinarias) {
            if (maquinarias[key].model.search(texto2.value) == 0) {
                let HTMLMaquinaria =
                    `<table width=100%>
                <tr>
                    <td rowspan="5" width="20%"><img width="200px"
                            src="${maquinarias[key].img}"
                            alt=""></td>
                    <td align="left" width="50%">
                        <ul class="list-group">
                            <i class="list-group-item"> <b>Nombre:</b> ${maquinarias[key].type} </i>
                            <li class="list-group-item"><b>Fabricante:</b> ${maquinarias[key].dealer}</li>
                            <li class="list-group-item"><b>Modelo:</b> ${maquinarias[key].model}</li>
                            <li class="list-group-item"> <b>Unidades Disponibles:</b> ${maquinarias[key].units}</li>
                            <li class="list-group-item"><b>Costo por Hora:</b>  ${maquinarias[key].hourCost}</li>
                            <li class="list-group-item"><b>Costo por Día:</b>  ${maquinarias[key].dayCost}</li>
                            <li class="list-group-item"><b>Costo por Semana:</b>  ${maquinarias[key].weekCost}</li>
                            <li class="list-group-item"><b>Transporte:</b>  ${maquinarias[key].transport}</li>
                        </ul>
                        <button onclick=EditMaquinaria(${maquinarias[key].id}) type="button" class="btn btn-primary btn-rounded" data-toggle="button" aria-pressed="false" autocomplete="off">Editar Maquinaria</button></<button>
                        <button onclick=DeleteMaquinaria(${maquinarias[key].id}) type="button" class="btn btn-primary btn-rounded btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Eliminar Maquinaria</button></<button>
                        </td>
                    <td></td>
                </tr>
            </table>
            `
                arrayMaquinariasSearch.push(HTMLMaquinaria);
            }

        }
        fillMaquinariasSearch();
    } else {
        alert("Favor de seleccionar solo un campo");
    }
}

function fillMaquinariasSearch() {
    document.getElementById("divMaquinarias").innerHTML = arrayMaquinariasSearch.join("");
}


let arrayContraOperadorSearch = [];

function buscarContOp() {
    event.preventDefault();
    arrayContraOperadorSearch = [];
    let texto = document.getElementById("datetimepicker2");
    if (texto.value == "") {
        fillContratacionesOperador();
    } else {
        for (let key in ContratacionesOperador) {
            if (ContratacionesOperador[key].beginContractDate.search(texto.value) == 0) {
                let HTMLcontratacionOperador =
                    `
                <div style="background:rgb(250, 248, 248)" class="form-row rounded">
                <table> 
                <th>Compañia: ${ContratacionesOperador[key].Contratista.CompanyName} </th>
                <tr>
                            <td>
                                <ul class="list-group"><b></b>
                                    <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesOperador[key].Contratista.name}</li>
                                    <li class="list-group-item"><b>Estado:</b> ${ContratacionesOperador[key].Contratista.state}</li>
                                    <li class="list-group-item"><b>Ciudad:</b> ${ContratacionesOperador[key].Contratista.city}</li>
                                    <li class="list-group-item"><b>Tarjeta:</b> ${ContratacionesOperador[key].Contratista.payInfo}</li>
                                </ul>
                            </td>
                            <td align="left">
                                <ul class="list-group">Operador
                                <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesOperador[key].Operador.name}</li>
                                <li class="list-group-item"><b>Estado:</b> ${ContratacionesOperador[key].Operador.state}</li>
                                <li class="list-group-item"><b>Ciudad:</b> ${ContratacionesOperador[key].Operador.city}</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-group">Datos de Contratación
                                    <li class="list-group-item"><b>Fecha Contratacion:</b>${ContratacionesOperador[key].beginContractDate}</li>
                                    <li class="list-group-item"><b>Fecha Fin Contratacion:</b>${ContratacionesOperador[key].endContractDate}</li>
                                    <li class="list-group-item"><b>Fecha de Pago:</b>${ContratacionesOperador[key].PaymentDay}</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    </div>
            `
                arrayContraOperadorSearch.push(HTMLcontratacionOperador);
            }

        }
        fillContratacionesOperadorSearch();
    }
}

function fillContratacionesOperadorSearch() {
    document.getElementById("divContratacionesOperador").innerHTML = arrayContraOperadorSearch.join("");
}

let arrayContraMaquinaSearch = [];

function buscarContMa() {
    event.preventDefault();
    arrayContraMaquinaSearch = [];
    let texto = document.getElementById("datetimepicker1");
    if (texto.value == "") {
        fillContratacionesMaquina();
    } else {
        for (let key in ContratacionesMaquina) {
            if (ContratacionesMaquina[key].beginContractDate.search(texto.value) == 0) {
                let HTMLcontratacionMaquina =
                `
                <div style="background:rgb(250, 248, 248)" class="form-row rounded">
                <table> 
                <th>Compañia: ${ContratacionesMaquina[key].Contratista.CompanyName} </th>
                <tr>
                            <td>
                                <ul class="list-group"><b>Contratista</b>
                                    <li class="list-group-item"> <b>Nombre:</b> ${ContratacionesMaquina[key].Contratista.name}</li>
                                    <li class="list-group-item"><b>Estado:</b> ${ContratacionesMaquina[key].Contratista.state}</li>
                                    <li class="list-group-item"><b>Ciudad:</b> ${ContratacionesMaquina[key].Contratista.city}</li>
                                    <li class="list-group-item"><b>Tarjeta:</b> ${ContratacionesMaquina[key].Contratista.payInfo}</li>
                                </ul>
                            </td>
                            <td align="left">
                                <ul class="list-group"><b>Máquina</b>
                                <li class="list-group-item"><b>Nombre:</b> ${ContratacionesMaquina[key].Maquina.type}<li>
                                <li class="list-group-item"><b>Modelo:</b> ${ContratacionesMaquina[key].Maquina.model}</li>
                                <li class="list-group-item"><b>Marca:</b> ${ContratacionesMaquina[key].Maquina.dealer}</li>
                                </ul>
                            </td>
                            <td>
                                <ul class="list-group"><b>Datos de Contratación</b>
                                    <li class="list-group-item"><b>Fecha Contratacion:</b>${ContratacionesMaquina[key].beginContractDate}</li>
                                    <li class="list-group-item"><b>Fecha Fin Contratacion:</b>${ContratacionesMaquina[key].endContractDate}</li>
                                    <li class="list-group-item"><b>Fecha de Pago:</b>${ContratacionesMaquina[key].PaymentDay}</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    </div>
            `
            arrayContraMaquinaSearch.push(HTMLcontratacionMaquina);
            }

        }
        fillContratacionesMaquinaSearch();
    }
}

function fillContratacionesMaquinaSearch() {
    document.getElementById("divContratacionesMaquinaria").innerHTML = arrayContraMaquinaSearch.join("");
}