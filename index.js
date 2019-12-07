const express = require('express');
const app = express();
const port = process.env.PORT || 3010;

// app.get('/', (req, res) => {
//     res.statusCode = 200;
//     res.send('Test');
// })

app.use('/', express.static(__dirname + '/public/home'));
app.use('/admin', express.static(__dirname + '/public/admin'));
app.use('/candidato', express.static(__dirname + '/public/candidato'));
app.use('/editMaquinaria', express.static(__dirname + '/public/editMaquinaria'));
app.use('/historial', express.static(__dirname + '/public/historial'));
app.use('/home', express.static(__dirname + '/public/home'));
app.use('/maquinaria', express.static(__dirname + '/public/maquinaria'));
app.use('/mensajes', express.static(__dirname + '/public/mensajes'));
app.use('/perfil', express.static(__dirname + '/public/perfil'));
app.use('/principal', express.static(__dirname + '/public/principal'));
app.use('/registrarMaquina', express.static(__dirname + '/public/registrarMaquina'));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});