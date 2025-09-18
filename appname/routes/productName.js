const express = require('express');
const productRouter = express.Router();
productRouter.route('/')
    .all((req, res,next) =>{
        res.setHeader('Content-Type','text/plain');
        res.statusCode = 200;
        next()
    })
    .get((req, res)=> {
        res.end('Show all product');
    })
    .post((req, res) => {
        res.end('Create new product with: name: ' + req.body.productName + ' and price: ' + req.body.price)
    })
productRouter.route('/:id')
    .get((req,res) => {
        res.end('Show detail of product: ' + req.params.id)
    })
    .put((req,res) => {
        res.end('Edit a product with name: ' + req.params.id)
    })
    .delete

module.exports = productRouter