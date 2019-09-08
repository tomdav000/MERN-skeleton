const express = require('express');
const mongoose = require('mongoose');
const Drink = require('../models/Drink');
const router = express.Router();

router.get('/hello',(req,res)=>{
	res.send('Shalom');
})

router.get('/',async(req,res)=>{
	try{
		const drinks = await Drink.find();
		res.send(drinks);
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.post('/',async(req,res)=>{
	try{
		let newDrink = new Drink({
			name: req.body.name,
			flavor: req.body.flavor
		});
		await newDrink.save();
		res.redirect('/api/drinks/')
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.put('/:id',async(req,res)=>{
	try{
		let drink = await Drink.findByIdAndUpdate(req.params.id);
		drink.name = req.body.name;
		drink.flavor = req.body.flavor;
		await drink.save();
		res.redirect('/api/drinks/');
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.get('/:id',async(req,res)=>{
	try{
		const drink = await Drink.findById(req.params.id);
		res.send(drink);
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

router.delete('/:id',async(req,res)=>{
	try{
		const drink = await Drink.findByIdAndRemove(req.params.id);
		res.redirect('/api/drinks/')
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...');
	}
})

module.exports = router;