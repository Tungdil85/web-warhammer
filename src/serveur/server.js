const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const root = '../../';

const port = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(root, 'dist/angular-cosmosdb'))); //on dit à express où se trouve l'angular
app.use('/api', routes);
app.get('*', (req, res) => {
    res.sendFile('dist/angular-cosmosdb/index.html', {root});
});


app.listen(port, () => console.log(`API running on localhost:${port}`));
