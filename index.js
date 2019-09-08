const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db').MongoDB;
const app = express();

mongoose.connect(db, {useNewUrlParser: true, useFindAndModify: false})
	.then(console.log('DB connected...'))
	.catch(err=>console.log('DB not connected...', err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/drinks/',require('./routes/routes'));

//Serve static assets in production
if(process.env.NODE_ENV === 'production') {
	//Set the static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`live on port ${PORT}`));