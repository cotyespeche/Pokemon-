const { Router } = require('express');
const pokemonsRouter = Router();


pokemonsRouter.get('/getAll', async(req, res) =>{
    try {
        res.send('estoy en getAll');
     console.log("estoy en pokemons")
    } catch (error) {
      res.status(404).send({error: error.message})
    }
        
    })

pokemonsRouter.get('/:id', async(req, res) =>{
    const { id } = req.params;

        try {
            res.send('estoy en id')
            console.log("estoy en id")
        } catch (error) {
          res.status(404).send({error: error.message})
        }
            
        })

pokemonsRouter.get('/', async(req, res) =>{
    // const { name } = req.query;
    res.send ('estoy en name')
    console.log('hola, estoy en name');
})
     

pokemonsRouter.post('/create', async(req, res) =>{
    try {
        res.send('estoy en post');
        console.log("estoy en post")
    } catch (error) {
        res.status(404).send({error: error.message})
    }
})
             


module.exports= pokemonsRouter;
              