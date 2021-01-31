const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
// Connection to mongoDB
mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@
products.hlljm.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority
`, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true,
 useFindAndModify: false
})
.then(() => console.log('Connected database'))
.catch(e => console.log('DB Error:',e))
app.use(morgan('dev'));
app.use(express.json());


app.use('/tareas',require('./routes/tareas'));
app.use('/api', require('./routes/Usuario'));

//static File

app.use(express.static())

//Server in 
app.listen(3000, () => {
    console.log('Server on port 3000',app.get('port'));
});