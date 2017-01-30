
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

// YOUR CODE HERE

router.get('/', function(req, res, next){
  knex('classifieds')
  .orderBy('id')
  .then((results)=>{
    results.forEach((result) => {
      delete result.created_at;
      delete result.updated_at;
    });
    return res
    .set('Content-Type', 'application/json')
    .send(results);
  });
});

router.get('/:id', function(req, res, next){
  knex('classifieds')
  .where('id', req.params.id)
  .first()
  .then((result)=>{
    delete result.created_at;
    delete result.updated_at;
    return res
    .set('Content-Type', 'application/json')
    .send(result);
  });
});

router.post('/', function(req, res, next){
  var classified = req.body;
  knex('classifieds')
  .insert(classified, '*')
  .then((result) =>{
    result.forEach((result) => {
      delete result.created_at;
      delete result.updated_at;
    });
    res.send(result[0]);
  });
});

router.patch('/:id', function(req, res, next){
  var classified = req.body;
  knex('classifieds')
  .update(classified, '*')
  .where('id', req.params.id)
  .then((result)=>{
    result.forEach((result)=>{
      delete result.created_at;
      delete result.updated_at;
    });
    res.send(result[0]);
  });
});

router.delete('/:id', function(req, res, next){
  knex('classifieds')
  .del()
  .where('id', req.params.id)
  .returning('*')
  .then((result)=>{
    result.forEach((result)=>{
      delete result.created_at;
      delete result.updated_at;
    });
    res.send(result[0]);
  });
});

module.exports = router;
