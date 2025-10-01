import express from "express"
import cors from "cors"

import {persons} from "./persons.js"

const app = express()
const port = 3333

/*
Maneiras de acessar infos (rotas)
---------------------------------
GET - transita infos back e frontend, nao guarda nenhuma nem envia;
POST - guarda info que provavelmente vai pro banco de dados;

----------ha tambem esses--------
PATCH, PUT ,DELETE
*/

app.use(cors())

app.get("/", (request, response) => {
    response.json (persons)
})

app.listen(port, ()=> {
    console.log (`Server running on port ${port}!`)
})