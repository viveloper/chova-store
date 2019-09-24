const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;

  const newEvent = new Event({ title, description, image });
  newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
  Event.findById(req.params.id)
    .then(event=>res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res)=>{
  Event.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Event deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res)=>{
  Event.findById(req.params.id)
    .then(event=>{
      event.title = req.body.title;
      event.description = req.body.description;
      event.image = req.body.image;

      event.save()
        .then(()=>res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;