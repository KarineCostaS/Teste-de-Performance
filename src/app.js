import express from "express"; //framework 
import db from "./config/dbConect.js"; //bancodedados
import routes from "./routes/index.js"; //rotas

db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso') //verificar a conexão com o banco de dados
})

const app = express();

app.use(express.json()) //colocar o express pra receber o json

routes(app);

  
export default app