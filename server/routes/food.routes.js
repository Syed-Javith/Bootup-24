const express = require('express');
const Post = require('../models/post.model');

const router = express.Router();

router.get('/food', async(req, res) => {
    try {
        const foods = await Post.find({});
        return res.status(200).send(foods)
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message : "internal server error" })
    }
})
router.get('/food/id', async(req, res) => {
    try {
        const { id } = req.params;
        const food = await Post.findById({id});
        return res.status(200).send(food)
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message : "internal server error" })
    }
})
router.post('/food', async (req, res) => {
    try {
        const {
            description,
            location,
            image,
            distributor,
            foods
        } = req.body;
        const newPost = new Post({
            description,
            location,
            image: image || "",
            distributor,
            isBooked: false,
            isDelivered: false,
            foods: foods
        })
        await newPost.save()
        res.status(200).send({ message : "Added successful" })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message : "internal server error" })
    }
})

module.exports = router