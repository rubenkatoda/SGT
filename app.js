
const express = require("express");
const app = express();
const port = 3000;

//Inicializar el servidor

app.listen(port,()=>{
    //console.log ("Servidor en ejecucion en ${port}") 
    console.log(`Servidor en ejecución en http://localhost:${port}`);
})

