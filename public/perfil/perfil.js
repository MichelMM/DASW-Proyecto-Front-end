let user = JSON.parse(localStorage.usuario);
let camposOperador = document.getElementById("rowOperador");
let camposContratista = document.getElementById("rowContratista");

let OdivIMG = document.getElementById("OperatorImage");
let CdivIMG = document.getElementById("ContratistaImage");

let OName = document.getElementById("OPinputName");
let OLast = document.getElementById("OPinputApellido");
let OMail = document.getElementById("OPinputEmail3");
let OlicensePDF = document.getElementById("licensePDF");
let OofficialID = document.getElementById("officialID");
let Ocity = document.getElementById("OPcity");
let Ocellphone = document.getElementById("OPphone");
let OpIMG = document.getElementById("operatorIMG");
let noCRB = document.getElementById("noCRB");
let yearsExperience = document.getElementById("experience");
let OPavailable = document.getElementById("OPavailable");
let Orfc = document.getElementById("OPRFC");
let Opassword = document.getElementById('OPpassword1');
let description = document.getElementById('description');
let job1 = document.getElementById('job1');
let jobc1 = document.getElementById('jobc1');
let jobtel1 = document.getElementById('jobtel1');
let job2 = document.getElementById('job2');
let jobc2 = document.getElementById('jobc2');
let jobtel2 = document.getElementById('jobtel2');
let job3 = document.getElementById('job3');
let jobc3 = document.getElementById('jobc3');
let jobtel3 = document.getElementById('jobtel3');
let newMachine = document.getElementById('newMachine');
let recomendation = document.getElementById('recomendation');
let EditOperador = document.getElementById('EditOperador');
let DeleteOperador = document.getElementById('DeleteOperador');

let CoIMG = document.getElementById("ContratistaIMG");
let CIMGurl = document.getElementById("img");
let Name = document.getElementById("inputName");
let Last = document.getElementById("inputApellido");
let Mail = document.getElementById("inputEmail3");
let Pstreet = document.getElementById("Pstreet");
let Pcity = document.getElementById("Pcity");
let PCP = document.getElementById("PCP");
let Cname = document.getElementById("Cname");
let Cstreet = document.getElementById("Cstreet");
let Ccity = document.getElementById("Ccity");
let CCP = document.getElementById("CCP");
let cellphone = document.getElementById("phone");
let Cpassword = document.getElementById('Cpassword1');
let payInfo = document.getElementById('payInfo');
let RFC = document.getElementById('RFC');
let EditContratista = document.getElementById('EditContratista');
let DeleteContratista = document.getElementById('DeleteContratista');


function ObtenerDatosOperador() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:3000/Operador?mail=${user[0].mail}`);
  xhr.send([JSON.stringify(null)]);
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText + '\n Error, correo o contraseña invalidos');
    } else {
      localStorage.setItem("usuario", xhr.response);
      let Usuario = JSON.parse(xhr.response);
      OprecargarDatos(Usuario[0]);
    }
  };
}

function ObtenerDatosContratista() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:3000/Contratista?mail=${user[0].mail}`);
  xhr.send([JSON.stringify(null)]);
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText + '\n Error, correo o contraseña invalidos');
    } else {
      localStorage.setItem("usuario", xhr.response);
      let Usuario = JSON.parse(xhr.response);
      CprecargarDatos(Usuario[0]);
      console.log(Usuario[0])
    }
  };
}

function ocultarCampos() {
  camposContratista.removeAttribute('hidden');
  camposOperador.removeAttribute('hidden');
  if (user[0].type == "operador") {
    camposContratista.setAttribute('hidden', "");
    ObtenerDatosOperador();
  } else {
    camposOperador.setAttribute('hidden', "");
    ObtenerDatosContratista();
  }
}

ocultarCampos();

function OprecargarDatos(User) {
  OdivIMG.innerHTML += ` <img  style="margin: 20px; height:180px; width:180px;"class="mx-auto d-block card-img-top rounded-circle"src="${User.operatorIMG}" alt="">`
  OName.value = User.name;
  OLast.value = User.lastname;
  OMail.value = User.mail;
  OlicensePDF.value = User.licensePDF;
  OofficialID.value = User.officialID;
  Ocity.value = User.city;
  Ocellphone.value = User.cellphone;
  OpIMG.value = User.operatorIMG;
  noCRB.value = User.noCRB;
  yearsExperience.value = User.yearsExperience;
  OPavailable.value = User.available;
  Orfc.value = User.rfc;
  Opassword.value = User.password;
  description.value = User.description;
  job1.value = User.previousJob1.company;
  jobc1.value = User.previousJob1.referenceContact.name;
  jobtel1.value = User.previousJob1.referenceContact.cellphone;
  job2.value = User.previousJob2.company;
  jobc2.value = User.previousJob2.referenceContact.name;
  jobtel2.value = User.previousJob2.referenceContact.cellphone;
  job3.value = User.previousJob3.company;
  jobc3.value = User.previousJob3.referenceContact.name;
  jobtel3.value = User.previousJob3.referenceContact.cellphone;
  recomendation.value = User.recomendation;
}

function CprecargarDatos(User) {
  CoIMG.innerHTML += ` <img  style="margin: 20px; height:180px; width:180px;"class="mx-auto d-block card-img-top rounded-circle"src="${User.img}" alt="">`
  CIMGurl.value = User.img;
  Name.value = User.name;
  Last.value = User.lastname;
  Mail.value = User.mail;
  Pstreet.value = User.personalAdd.street;
  Pcity.value = User.personalAdd.city;
  PCP.value = User.personalAdd.CP;
  Cstreet.value = User.companyAdd.street;
  Cname.value = User.companyName;
  Ccity.value = User.companyAdd.city;
  CCP.value = User.companyAdd.CP;
  cellphone.value = User.cellphone;
  Cpassword.value = User.password;
  payInfo.value = User.payInfo;
  RFC.value = User.rfc
}

EditOperador.addEventListener('click', function () {
  event.preventDefault();
  let DatosOperador = {
    name: OName.value,
    id: user[0].id,
    lastname: OLast.value,
    mail: OMail.value,
    licensePDF: OlicensePDF.value,
    officialID: OofficialID.value,
    city: Ocity.value,
    state: (Ocity.value == "Guadalajara") ? "Jalisco" : (Ocity.value == "Monterrey") ? "Nuevo Leon" : "Ciudad de México",
    cellphone: Ocellphone.value,
    operatorIMG: OpIMG.value,
    noCRB: noCRB.value,
    yearsExperience: yearsExperience.value,
    available: OPavailable.value,
    rfc: Orfc.value,
    user: OName.value,
    password: Opassword.value,
    type: "operador",
    previousJob1: {
      company: job1.value,
      referenceContact: {
        name: jobc1.value,
        cellphone: jobtel1.value
      }
    },
    previousJob2: {
      company: job2.value,
      referenceContact: {
        name: jobc2.value,
        cellphone: jobtel2.value
      }
    },
    previousJob3: {
      company: job3.value,
      referenceContact: {
        name: jobc3.value,
        cellphone: jobtel3.value
      }
    },
    machinesOperated: [],
    recomendationCard: recomendation.value,
    description: description.value
  }; //objeto  donde se guardaran los datos de registro;
  let machines = [];
  machines = user[0].machinesOperated;
  machines.push(newMachine.value);
  DatosOperador.machinesOperated = machines;
  console.log(DatosOperador);
  OperadorUpdate(DatosOperador);
});

function OperadorUpdate(Datos) {
  event.preventDefault();
  // 1. Crear XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  // 2. Configurar: PUT actualizar archivo
  xhr.open('PUT', `http://localhost:3000/Operador/${Datos.id}`);
  // 3. indicar tipo de datos JSON
  xhr.setRequestHeader('Content-Type', 'application/json');
  // 4. Enviar solicitud a la red
  xhr.send(JSON.stringify(Datos));
  // 5. Una vez recibida la respuesta del servidor
  xhr.onload = function () {
    if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
      // Ocurrió un error
      alert(xhr.status + ':' + xhr.statusText); // e.g. 404: Not Found
    } else {
      alert(xhr.responseText + '\n El Operador ha sido actualizado con éxito');
    }
  };
};

DeleteOperador.addEventListener('click', function () {
  // 1. Crear XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  // 2. Configurar: PUT actualizar archivo
  xhr.open('DELETE', `http://localhost:3000/Operador/${user[0].id}`);
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

      window.location.href = "./home";
      alert("Usuario Eliminado");
    }
  };

});

EditContratista.addEventListener('click', function () {
  let DatosContratista = {
    id: user[0].id,
    name: Name.value,
    lastname: Last.value,
    cellphone: cellphone.value,
    mail: Mail.value,
    personalAdd: {
      street: Pstreet.value,
      city: Pcity.value,
      state: (Pcity.value == "Guadalajara") ? "Jalisco" : (document.getElementById("city").value == "Monterrey") ? "Nuevo Leon" : "Ciudad de México",
      CP: PCP.value
    },
    companyName: Cname.value,
    companyAdd: {
      street: Cstreet.value,
      city: Ccity.value,
      state: (Ccity.value == "Guadalajara") ? "Jalisco" : (document.getElementById("city").value == "Monterrey") ? "Nuevo Leon" : "Ciudad de México",
      CP: CCP.value
    },
    payInfo: payInfo.value,
    rfc: RFC.value,
    user: Name.value,
    password: Cpassword.value,
    type: "contratista",
    img: CIMGurl.value
  }
  ContratistaUpdate(DatosContratista);
});

function ContratistaUpdate(Datos) {
  event.preventDefault();
  // 1. Crear XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  // 2. Configurar: PUT actualizar archivo
  xhr.open('PUT', `http://localhost:3000/Contratista/${Datos.id}`);
  // 3. indicar tipo de datos JSON
  xhr.setRequestHeader('Content-Type', 'application/json');
  // 4. Enviar solicitud a la red
  xhr.send(JSON.stringify(Datos));
  // 5. Una vez recibida la respuesta del servidor
  xhr.onload = function () {
    if (xhr.status != 200) { // analizar el estatus de la respuesta HTTP
      // Ocurrió un error
      alert(xhr.status + ':' + xhr.statusText); // e.g. 404: Not Found
    } else {
      alert(' El Contratista ha sido actualizado con éxito');
    }
  };
};

DeleteContratista.addEventListener('click', function () {
  // 1. Crear XMLHttpRequest object
  let xhr = new XMLHttpRequest();
  // 2. Configurar: PUT actualizar archivo
  xhr.open('DELETE', `http://localhost:3000/Contratista/${user[0].id}`);
  // 3. indicar tipo de datos JSON
  xhr.setRequestHeader('Content-Type', 'application/json');
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

      window.location.href = "./home";
      alert("Usuario Eliminado");
    }
  };

});