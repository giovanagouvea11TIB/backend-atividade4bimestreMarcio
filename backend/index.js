import express, { response } from "express"
import cors from "cors"
import mysql2 from "mysql2"

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
    const selectCommand = "SELECT name, email FROM giovanagouvea_02mb"

    database.query(selectCommand, (error, users) =>{
        if (error) {
            console.log (error)
            return
        }
        //so testando

        response.json(users)
    })
})

app.post ("/login", (request, response)=> {
    const {email, password} = request.body.user

    const selectCommand = "SELECT * FROM giovanagouvea_02mb WHERE email = ?"

    database.query(selectCommand, [email], (error, user) => {
        if (error) {
            console.log (error)
            return
        }

        //se o usuario não existir  ou se a senha estiver incorreta 
        if(users.length === 0 || user[0].password !== password){
            response.json({message: "Email ou senha incorretos!"})
            return
        }

        response.json({id: user[0].id, name: user[0].name})
    })
})

app.post("pontuacao", (request, response) => {
    //pegar o id e a pontuacao de dentro do request
    //selecionar o usuario pelo id 
    //alterar a pontuacao do banco de dados usando a pontuacao que foi recebida do frontend
})

app.post("/cadastrar", (request, response) => {
    //desestruturacao
    const { user } = request.body
    console.log(user)

    //cadastro no banco de dados 
    const insertCommand = `
    INSERT INTO giovanagouvea_02mb (name, email, password)
    VALUES (?, ?, ?)
    `
    database.query (insertCommand, [user.name, user.email, user.password], (error) => {
        if (error) {
            console.log (error)
            return
        }
        console.log (user)
    })

    response.status(201).json({message: "Usuario cadastrado com sucesso!"})
    })


app.listen(port, ()=> {
    console.log (`Server running on port ${port}!`)
})

    


