const express = require('express')
const app = express()

//ROTA
    // Method HTTP - CRUD(CREATE, READ, UPDATE, DELETE)
        // GET - pega uma info
        // POST - Cria uma info
        // PUT - altera todo a info
        // PATH - altera parte da info
        // DELETE - apaga uma info


    // Nome - Um identificador da rota

    // functon (callback) - responsavel por executar algum comando


app.get("/soma", (req, res) => {
    const soma = 100 + 1;

    res.send({soma: soma})
});

app.listen(3000);