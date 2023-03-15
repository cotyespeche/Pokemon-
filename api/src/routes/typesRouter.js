const { Router } = require('express');
const typesRouter = Router();

const { getAllTypes } = require ('../constrollers/getAllTypes')

// typesRouter.get("/", getAllTypes)

typesRouter.get("/", async (req, res) => {
    try {
        const types = await getAllTypes()
        
        res.status(200).json(types)
        console.log(types)

    } catch (error) {
        return res.status(404).send(error)
    }
});

module.exports = typesRouter;
