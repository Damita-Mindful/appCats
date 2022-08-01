const { Router } = require('express');
const { API_KEY, API_URL } = process.env;
const { Cat, Temperament } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getInfoApi, getInfoDb, getAll } = require('../controllers/controllers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/cats', async (req, res) => {
    const name = req.query.name
    const totalCats = await getAll();
    if(name) {
        const catName = await totalCats.filter(cat => cat.name.toLowerCase().includes(name.toLowerCase()))
        catName ? 
        res.status(200).send(catName) : 
        res.status(404).send("Sorry, cat not found")
    }
    else {
        res.status(200).send(totalCats)
    }
})

router.get('/temperaments', async (req, res) => { 
    const apiCats = await getInfoApi();
    const temperament = apiCats.map(el => el.temperament).join().split(',')
    const dbTemps = temperament.map(el => el.trim())

    dbTemps.forEach( el => {
        if(el !== '')
        Temperament.findOrCreate({
            where: { name: el }
        })       
    });
    const allTemps = await Temperament.findAll();
    res.status(200).send(allTemps)
})

router.get("/cats/:id", async (req, res) =>{
    const id =req.params.id;
    const cats = await getAll();
    if(id) {
        let catId = await cats.filter(dog => dog.id == id)
        catId.length 
        ? res.status(200).send(catId) 
        : res.status(404).send({ info: "Cat not found"})
    }
})

router.post('/cat', async (req, res) =>{
    let { name,  
        weight, 
        life_span,
        image, 
        description,
        dog_friendly,
        createdInDb,
        temperament } = req.body

    const newCat = await Cat.create({
    name, 
    weight, 
    life_span, 
    image,
    description,
    dog_friendly,
    createdInDb
});
    let tempDb = await Temperament.findAll({
        where : { name : temperaments }
    })
    newCat.addTemperament(tempDb)
    res.send('Cat creado con éxito 🐈😸')
});

module.exports = router;