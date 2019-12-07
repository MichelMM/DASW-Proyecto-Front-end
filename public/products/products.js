let listProducts = document.getElementById('listProducts');

function makeRequest(sMethod, sURL, headers, body, cbOk, cbErr) {
    let xhr = new XMLHttpRequest();
    xhr.open(sMethod, sURL);
    for(let key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
    xhr.onload = () => {
        if(xhr.status != 200) {
            cbErr(xhr.status, xhr.statusText);
        }
        else {
            cbOk(JSON.parse(xhr.responseText));
        }
    };
}

function arrayToList(products) {
    let result = "";
    products.forEach(p => {
        result += productToLI(p);
    });
    return result;
}

function productToLI(product) {
    let result = `<li class="list-group-item">${product.nombre} (${product.codigo}): $${product.precio}</li>`;
    return result;
}

/* Configurar la petición de productos */