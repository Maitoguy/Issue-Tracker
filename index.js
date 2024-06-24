const express = require('express');
const path = require('path');
const port = 8000;

const app = express();


app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'Styles')));


app.use('/', require('./routes/index'));

app.listen(port, function(err) {
    if (err) {
        console.log("Error in running the server");
    }
    console.log(`Server is running on port ${port}`);
});
