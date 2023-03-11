const { Router } = require('express');
const typesRouter = Router();


typesRouter.get("/types", async (req, res) => {
    try {
        res.send('hola, estoy en types');
        console.log('hola, estoy en types');
       
    } catch (error) {
        return res.status(404).send(error)
    }
});
module.exports = typesRouter;
