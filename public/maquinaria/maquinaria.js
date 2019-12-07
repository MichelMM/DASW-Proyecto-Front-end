let MACHinfo = JSON.parse(localStorage.maquina);
let CONinfo = JSON.parse(localStorage.usuario);
console.log(MACHinfo);
console.log(CONinfo[0]);


let tipoMaquina = document.getElementById("MACHname");
let fabricanteMaquina = document.getElementById("MACHdealer");
let modeloMaquina = document.getElementById("MACHmodel");
let nombreContratista = document.getElementById("contName");
let estadoContratista = document.getElementById("contState");
let ciudadContratista = document.getElementById("contCity");
let informacionPago = document.getElementById("payInfo");
let comName=document.getElementById("comName");
let fechaInicio = document.getElementById("beginDate");
let fechaFin = document.getElementById("endDate");
let diaPago = document.getElementById("payDate");

let btnContratar = document.getElementById("btnContratar");

tipoMaquina.value= MACHinfo.type;
fabricanteMaquina.value = MACHinfo.dealer;
modeloMaquina.value = MACHinfo.model;
nombreContratista.value = CONinfo[0].name;
comName.value=CONinfo[0].companyName;
estadoContratista.value = CONinfo[0].companyAdd.state;
ciudadContratista.value = CONinfo[0].companyAdd.city;
informacionPago.value = CONinfo[0].payInfo;

btnContratar.addEventListener("click", function () {
    let contratacion = {
        Maquina: {
            image: MACHinfo.img,
            type: tipoMaquina.value,
            dealer: fabricanteMaquina.value,
            model: modeloMaquina.value
        },
        Contratista: {
            CompanyName:comName.value,
            name: nombreContratista.value,
            state: estadoContratista.value,
            city: ciudadContratista.value,
            payInfo: informacionPago.value
        },
        beginContractDate: fechaInicio.value,
        endContractDate: fechaFin.value,
        PaymentDay: diaPago.value
    }
    postContratacion(contratacion);
})

function postContratacion(datos) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/contratacionesMaquina");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 201) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar la contratacion');
        } else {
            alert(xhr.responseText + '\n La contratación ha sido registrada con éxito');
        }
    };
}

document.addEventListener("DOMContentLoaded", function () {
    let maquina = JSON.parse(localStorage.getItem("maquina"));
    document.getElementById("img").setAttribute("src", maquina.img);
    document.getElementById("type").after(maquina.type);
    document.getElementById("dealer").after(maquina.dealer);
    document.getElementById("model").after(maquina.model);
    document.getElementById("description").after(maquina.description);
    document.getElementById("specifications").setAttribute("href", maquina.specifications);

    OperatorRequest(maquina.id, () => {
        let operadores = JSON.parse(localStorage.getItem("operadorM"));
        console.log(operadores[0]);
        let array = [];
        for (let operador in operadores) {
            // console.log(operadores[operador]);
           
            let HTMLOperador = `<tr>
<td rowspan="5"><img width="200px"
        src="${operadores[operador].operatorIMG}"
        alt=""></td>
<td>Nombre:</td>
<td>${operadores[operador].name} ${operadores[operador].lastname}</td>
</tr>
<tr>
<tr>
<td>Años de Experiencia:</td>
<td>${operadores[operador].yearsExperience} años</td>
</tr>
<tr>
<td>Disponibilidad:</td>
<td>${operadores[operador].available}</td>
</tr>
<tr>
<td>Calificación:</td>
<td>Aqui van las estrellitas</td>
<td><button onclick=verOperador(${operadores[operador].id}) type="button" class="btn btn-primary" data-toggle="button"
        aria-pressed="false" autocomplete="off">Ver</button></td>
</tr>`;
            array.push(HTMLOperador);
        }
        document.getElementById('table').innerHTML = array.join("<div></div> ");

    }, () => {
        console.log("No fue posible recibir operado");
    });

});

function OperatorRequest(object, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Operador?machinesOperated_like=${object}`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(object)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
            cbErr();
        } else {
            localStorage.setItem("operadorM", xhr.responseText);
            cbOk();
        }
    };
}

function verOperador(key){
    for (let i=0; i < JSON.parse(localStorage.operadorM).length; i++) {
        if (JSON.parse(localStorage.operadorM)[i].id == key) {
            localStorage.operador = JSON.stringify(JSON.parse(localStorage.operadorM)[i]);
            window.location.href = "./candidato";
        }
    } 

}

