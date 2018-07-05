/**
 * Created by hoangnd on 8/7/17.
 */
var express = require('express');
var router = express.Router();
let Food = require('../models/FoodModel');

router.get('/list_all_foods', (request, response, next) => {
    response.end("GET requested => list_all_foods");
});

router.post('/insert_new_food', (request, response, next) => {
    const newFood = new Food({
        name: request.body.name,
        foodDescription: request.body.foodDescription
    });
    newFood.save((err) => {
        if (err) {
            response.json({
                result: "failed",
                data: {},
                messege: `Error is : ${err}`
            });
        } else {
            response.json({
                result: "ok",
                data: {
                    name: request.body.name,
                    foodDescription: request.body.foodDescription,
                    messege: "Insert new food successfully"
                }
            });
        }
    });
});

router.put('/update_a_food', (request, response, next) => {
    response.end("PUT requested => update_a_food");
});

router.delete('/delete_a_food', (request, response, next) => {
    response.end("DELETE requested => delete_a_food");
});
module.exports = router;