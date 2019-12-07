let btnloginContratista = document.getElementById("loginContratista");
let btnloginOperador = document.getElementById("loginOperador");
let btnloginAdmin = document.getElementById("loginAdmin");
let UserTypeLogin=document.getElementById("radiobtnLog");

UserTypeLogin.addEventListener("change",ChangeLoginBtn);
function ChangeLoginBtn(){
let radio=document.querySelector('input[name="UserTypeLog"]:checked').value;
btnloginContratista.setAttribute('hidden',"");
btnloginOperador.setAttribute('hidden',"");
btnloginAdmin.setAttribute('hidden',"");
if(radio=='Operador'){
    btnloginOperador.removeAttribute('hidden');
}
if(radio=='Contratista'){
    btnloginContratista.removeAttribute('hidden');
}
if(radio=='Admin'){
    btnloginAdmin.removeAttribute('hidden');
}
}


btnloginContratista.addEventListener("click", function (event) {
    event.preventDefault();
    let objeto = {
        mail: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    }
    loginContratista(objeto, function () {
        let temp = JSON.parse(localStorage.usuario);
        if (temp.length > 0) {
            if (temp[0].password == document.getElementById("loginPassword").value) {
                window.location.href = "./principal";
            } else {
                alert("Error, password o correo Incorrectos")
            }
        } else {
            alert("Error, password o correo Incorrectos")
        }


    }, function () {
        alert("No se pudo");
    });

});

function loginContratista(datos, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Contratista?mail=${datos.mail}`);
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + '\n Error, correo o contraseña invalidos');
            cbErr();
        } else {
            localStorage.setItem("usuario", xhr.response);
            cbOk();
            // 
        }
    };
}

btnloginOperador.addEventListener("click", function (event) {
    event.preventDefault();
    let objeto = {
        mail: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    }
    loginOperador(objeto, function () {
        let temp = JSON.parse(localStorage.usuario);
        if (temp.length > 0) {
            if (temp[0].password == document.getElementById("loginPassword").value) {
                window.location.href = "./principal";
            } else {
                alert("Error, password o correo Incorrectos")
            }
        } else {
            alert("Error, password o correo Incorrectos")
        }


    }, function () {
        alert("No se pudo");
    });

});

function loginOperador(datos, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Operador?mail=${datos.mail}`);
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + '\n Error, correo o contraseña invalidos');
            cbErr();
        } else {
            localStorage.setItem("usuario", xhr.response);
            cbOk();
            // 
        }
    };
}

btnloginAdmin.addEventListener("click", function (event) {
    event.preventDefault();
    let objeto = {
        mail: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    }
    loginAdmin(objeto, function () {
        let temp = JSON.parse(localStorage.usuario);
        if (temp.length > 0) {
            if (temp[0].password == document.getElementById("loginPassword").value) {
                window.location.href = "./admin";
            } else {
                alert("Error, password o correo Incorrectos")
            }
        } else {
            alert("Error, password o correo Incorrectos")
        }


    }, function () {
        alert("No se pudo");
    });

});

function loginAdmin(datos, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/Admin?mail=${datos.mail}`);
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText + '\n Error, correo o contraseña invalidos');
            cbErr();
        } else {
            localStorage.setItem("usuario", xhr.response);
            cbOk();
            // 
        }
    };
}