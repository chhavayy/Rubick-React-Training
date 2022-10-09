const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app =express();
const PORT= process.env.PORT ||8080;

const mongoDB_URI='mongodb+srv://chhavi:1234@rubickdb.aq4nib4.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB_URI || 'mongodb://localhost/ProductTable', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=> {
    console.log('Mongoose is connected.');
});



//Saving data to our mongo database
const data={
    Code: 1234,
    Name: 'hp',
    Qty: 22,
    Price: 123432,
    Status: 'Active',
    Date_added: '20 Sept, 2022'
}

// const newProductTable =new ProductTable(data);
// newProductTable.save((error)=>{
//     if(error){
//         console.log("Data not saved.");
//     }
//     else {
//         console.log("Data saved.");
//     }
// });

app.use(morgan('tiny')); //HTTP request logger


//Routing
app.get('/ProductTable', (req, res)=> {

    ProductTable.find({ })
        .then((data)=>{
                console.log(data);
                res.json(data);
        })
        .catch(()=> {
                console.log('error:', error);
        });
    
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));