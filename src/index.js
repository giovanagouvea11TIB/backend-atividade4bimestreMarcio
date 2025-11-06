import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import {persons} from "./persons.js"

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;


const database = mysql2.createPool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    connectionLimit: 10
})      

const app = express()
const port = 3333

//GET, POST, PATCH, PUT, DELETE

app.use(cors())
app.use (express.json())

app.get("/", (request, response) => {
    response.json (persons)
})

app.post("/cadastrar", (request, response) => {
    //desestruturacao
    const { user } = request.body
    console.log(user)

    //cadastro no banco de dados 
    const insertCommand = `
    INSERT INTO giovanagouvea_02mb (name, email, passaword)
    VALUES (?, ?, ?)
    `
    database.query (insertCommand, [user.name, user.email, user.passaword], (error) => {
        if (error) {
            console.log (error)
            return
        }
    })

    response.status(201).json({message: "Usuario cadastrado com sucesso!"})
    })


app.listen(port, ()=> {
    console.log (`Server running on port ${port}!`)
})

