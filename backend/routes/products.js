const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
  Product.findById(req.params.id)
    .then(product=>res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const image = req.body.image;
  const inCart = req.body.inCart;
  const count = req.body.count;  

  const newProduct = new Product({ title, description, price, image, inCart, count });
  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res)=>{
  Product.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Product deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res)=>{
  Product.findById(req.params.id)
    .then(product=>{
      product.title = req.body.title;
      product.description = req.body.description;
      product.price = req.body.price
      product.image = req.body.image;
      product.inCart = req.body.inCart;
      product.count = req.body.count;

      product.save()
        .then(()=>res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;