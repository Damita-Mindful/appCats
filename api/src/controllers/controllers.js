const axios = require('axios');
const { Cat, Temperament } = require('../db.js');
const { API_KEY, API_URL } = process.env

require('dotenv').config();

const getInfoApi = async () => {
    const apiCat = await axios.get(`${API_URL}?api_key=${API_KEY}`)
    const apiInfo = await apiCat.data.map(cat => {
        if(cat.image !== undefined) {
        return {
            id: cat.id,
            name: cat.name,
            weight: cat.weight.metric,
            life_span: cat.life_span, 
            temperament: cat.temperament,
            origin: cat.origin,
            description: cat.description,
            wikipedia_url: cat.wikipedia_url, 
            adaptability: cat.adaptability,
            affection_level: cat.affection_level,
            child_friendly: cat.child_friendly,
            dog_friendly: cat.dog_friendly,
            energy_level: cat.energy_level,
            image: cat.image.url,
        };
    } else {
        return {
            id: cat.id,
            name: cat.name,
            weight: cat.weight.metric,
            life_span: cat.life_span, 
            temperament: cat.temperament,
            origin: cat.origin,
            description: cat.description,
            wikipedia_url: cat.wikipedia_url, 
            adaptability: cat.adaptability,
            affection_level: cat.affection_level,
            child_friendly: cat.child_friendly,
            dog_friendly: cat.dog_friendly,
            energy_level: cat.energy_level,
        };

    }
    });
    return apiInfo
};

const getInfoDb = async () => {
    return await Cat.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

const getAll = async () => {
    const infoApi = await getInfoApi();
    const infoDb = await getInfoDb();
    const allInfo = infoApi.concat(infoDb);
    return allInfo
}

module.exports = { getInfoApi, getInfoDb, getAll }