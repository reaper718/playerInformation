const Players = require('../models/player');

const addPlayer = async (req,res) => {
    try {
        const player = await Players.create({
            ...req.body
        })

        res.status(200).send("Player created successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

const getPlayer = async (req,res) => {
    try {
        const {name} = req.params;

        const player = await Players.findOne({
            where: {
                name: name
            }
        })

        if(!player){
            res.status(404).send("player not found");
        }

        res.status(200).json(player);
    } catch (error) {
        res.status(500).send(error);
    }

}

const editPlayer = async (req,res) => {
    try {
        const {id} = req.params;

        const player = await Players.findByPk(id);

        await player.update({
            ...req.body
        })

        res.status(200).json(player);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    addPlayer,
    getPlayer,
    editPlayer
}