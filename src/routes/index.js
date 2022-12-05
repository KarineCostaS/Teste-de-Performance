import express from "express";
import bandas from "./bandasRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Bem vindo a Rock n Jeans"})
    })

    app.use(
        express.json(),
        bandas
    )
}

export default routes