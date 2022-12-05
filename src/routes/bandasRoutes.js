import express from "express";
import BandaController from "../controllers/bandasController.js";

const router = express.Router();

router
.get("/bandas", BandaController.listarBandas) //rota de buscar GET
.get("/bandas/:id", BandaController.listarBandaPorId) //rota buscar GET por ID
.post("/bandas", BandaController.cadastrarBanda) //rota de enviar POST
.put("/bandas/:id", BandaController.atualizarBanda) //rota de atualizar PUT
.delete("/bandas/:id", BandaController.excluirBanda) //rota para excluir 



export default router;
