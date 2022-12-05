import bandas from "../models/Banda.js";

class BandaController {

    static listarBandas = (req, res) => {
        bandas.find((err, bandas) => {
        res.status(200).json(bandas) //devolver o array das bandas 
    })
    }

    static listarBandaPorId = (req, res) => {
        const id = req.params.id;

    bandas.findById(id, (err, bandas) => {
        if(err) {
            res.status(400).send({message: `${err.message} - Id da Banda não localizado`})
        } else {
            res.status(200).send(bandas);
        }
    })
    }
      
    static cadastrarBanda = (req, res) => {
        let banda = new bandas(req.body);

        banda.save((err) => {

            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar banda.`})
            } else {
                res.status(201).send(banda.toJSON())
            }
        })
    }

    static atualizarBanda = (req, res) => {
        const id = req.params.id;

        bandas.findByIdAndUpdate(id, {$set: req.body}, (err) => { //metodo busca por id e atualiza

            if(!err){
                res.status(200).send({message: 'Banda atualizada com sucesso'})
            } else {
                res.status(500).send({message: err.message}) //se der erro envia mensagem com erro
            }
        })
    }
                
    static excluirBanda = (req, res) => {
        const id = req.params.id;

        bandas.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Banda removida com sucesso'})
            } else { 
                res.status(500).send({message: err.message})
            }
        })
    }
    
}

export default BandaController