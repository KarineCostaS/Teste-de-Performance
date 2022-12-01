import express from "express";

const app = express();

app.use(express.json())


const bandas = [
    {id: 1, "titulo": "Guns n' Roses"},
    {id: 2, "titulo": "Iron Maiden"},
    {id: 3, "titulo": "Europe"},
    {id: 4, "titulo": "Nirvana"},
    {id: 5, "titulo": "Skid Row"},
    {id: 6, "titulo": "Legião Urbana"}
]

app.get('/', (req, res) => {
    res.status(200).send('Bem vindo a Rock Jeans') //Url principal so a localhost
})

app.get('/bandas', (req,res) => { //devolve todas as l  
    res.status(200).json(bandas) //devolver o array das bandas
})


app.get('/bandas/:id', (req, res) => {
    let index = buscaBanda(req.params.id);
    res.json(bandas[index])
 })

app.post('/bandas', (req, res) => {
    bandas.push(req.body);
    res.status(201).send('A Banda foi cadastrada com sucesso')
  })

 app.put('/bandas/:id', (req, res) => {
    let index = buscaBanda(req.params.id);
    bandas[index].titulo = req.body.titulo;
    res.json(bandas)
 })

  app.delete('/bandas/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaBanda(id);
    bandas.splice(index, 1);
    res.send(`Banda ${id} removida com sucesso`);
  })
  

function buscaBanda(id) {
    return bandas.findIndex(banda => banda.id ==id)
}
  
  export default app