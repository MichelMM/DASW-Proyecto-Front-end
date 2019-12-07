let modal = document.getElementById('registro');
let BtnRegContratista = document.getElementById("BtnRegContratista");
let BtnRegOperador = document.getElementById("BtnRegOperador");
let UserType = document.getElementById("radiobtn");
let formContratista = document.getElementById('formContratista');
let formOperador = document.getElementById('formOperador');



UserType.addEventListener("change", ChangeForm);

function ChangeForm() {
    let radio = document.querySelector('input[name="UserType"]:checked').value;
    formContratista.setAttribute('hidden', "");
    formOperador.setAttribute('hidden', "");
    if (radio == 'Operador') {
        formOperador.removeAttribute('hidden');
    }
    if (radio == 'Contratista') {
        formContratista.removeAttribute('hidden');
    }
}

formContratista.addEventListener("change", camposContratista);
formOperador.addEventListener("change", camposOperador);

function camposContratista() {
    let notValid = formContratista.querySelectorAll(":invalid");
    let valid = formContratista.querySelectorAll(":valid");
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    notValid.forEach(function (element) {
        element.style.border = '1px solid #ff0000';
        formContratista.querySelector('button').disabled = true;
    });
    if (notValid.length == 0 && password1.value == password2.value) {
        formContratista.querySelector('button').disabled = false;
    } else if (notValid.length != 0 || password1.value != password2.value) {
        formContratista.querySelector('button').disabled = true;
    }

    valid.forEach(function (element) {
        element.style.border = '1px solid #ced4da';
    });
}

function camposOperador() {
    let notValid = formOperador.querySelectorAll(":invalid");
    let valid = formOperador.querySelectorAll(":valid");
    let password1 = document.getElementById('OPpassword1');
    let password2 = document.getElementById('OPpassword2');
    notValid.forEach(function (element) {
        element.style.border = '1px solid #ff0000';
        formOperador.querySelector('button').disabled = true;
    });
    if (notValid.length == 0 && password1.value == password2.value) {
        formOperador.querySelector('button').disabled = false;
    } else if (notValid.length != 0 || password1.value != password2.value) {
        formOperador.querySelector('button').disabled = true;
    }
    valid.forEach(function (element) {
        element.style.border = '1px solid #ced4da';
    });
}

BtnRegContratista.addEventListener("click", function (event) {
    let objeto = {
        id: document.getElementById("phone").value,
        name: document.getElementById("inputName").value,
        lastname: document.getElementById("inputApellido").value,
        cellphone: document.getElementById("phone").value,
        mail: document.getElementById("inputEmail3").value,
        personalAdd: {
            street: document.getElementById("Pstreet").value,
            city: document.getElementById("Pcity").value,
            state: (document.getElementById("Pcity").value == "Guadalajara") ? "Jalisco" : (document.getElementById("city").value == "Monterrey") ? "Nuevo Leon" : "Ciudad de México",
            CP: document.getElementById("PCP").value,
        },
        companyName: document.getElementById("Cname").value,
        companyAdd: {
            street: document.getElementById("Cstreet").value,
            city: document.getElementById("Ccity").value,
            state: (document.getElementById("Ccity").value == "Guadalajara") ? "Jalisco" : (document.getElementById("city").value == "Monterrey") ? "Nuevo Leon" : "Ciudad de México",
            CP: document.getElementById("CCP").value,
        },
        payInfo: document.getElementById("payInfo").value,
        rfc: document.getElementById("RFC").value,
        user: document.getElementById("inputName").value,
        password: document.getElementById('password1').value,
        type:"contratista",
        img:"data:image/png;base64,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"
    }
    registrarContratista(objeto);
    event.preventDefault();
});


BtnRegOperador.addEventListener("click", function (event) {
    let objeto = {
        id: document.getElementById("OPphone").value,
        name: document.getElementById("OPinputName").value,
        lastname: document.getElementById("OPinputApellido").value,
        mail: document.getElementById("OPinputEmail3").value,
        licensePDF:document.getElementById("licensePDF").value,
        officialID:document.getElementById("officialID").value,
        city: document.getElementById("OPcity").value,
        state: (document.getElementById("OPcity").value == "Guadalajara") ? "Jalisco" : (document.getElementById("OPcity").value == "Monterrey") ? "Nuevo Leon" : "Ciudad de México",
        cellphone: document.getElementById("OPphone").value,
        operatorIMG: document.getElementById("operatorIMG").value,
        noCRB:document.getElementById("noCRB").value,
        yearsExperience:document.getElementById("experience").value,
        available:document.getElementById("OPavailable").value,
        rfc: document.getElementById("OPRFC").value,
        user: document.getElementById("OPinputName").value,
        password: document.getElementById('OPpassword1').value,
        type:"operador",
        previousJob1: {
            company: "",
            referenceContact: {
              name: "",
              cellphone: ""
            }
          },
        previousJob2: {
            company: "",
            referenceContact: {
              name: "",
              cellphone: ""
            }
          },
        previousJob3: {
            company: "",
            referenceContact: {
              name: "",
              cellphone: ""
            }
          },
        machinesOperated:[],
        recomendationCard:"",
        description:"",
        status:"active"
    }
    registrarOperador(objeto);
    event.preventDefault();
});

function registrarContratista(datos) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/Contratista");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 201) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
        } else {
            alert(xhr.responseText + '\n El Contratista ha sido registrado con éxito');
        }
    };
}

function registrarOperador(datos) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/api/operadores");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 201) {
            alert(xhr.status + ': ' + xhr.statusText + 'Error, no se ha podido registrar el usuario');
        } else {
            alert(xhr.responseText + '\n El Operador ha sido registrado con éxito');
        }
    };
}