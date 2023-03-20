const express = require('express');
const cors = require('cors');
const { getDataFromSheet } = require('./google-sheets');
const { getCompanyFromSheet } = require('./company-data');
const app = express();

app.use(cors());

app.get('/items/:option', async (req, res) => {
    const { option } = req.params;
    const data = await getDataFromSheet('1zbF_72YnsjlXTbz1eHY2l8ygyOan86dVlSBdaNKlW5k');
    const filteredData = data.filter(row => row[4].toLowerCase() === option);
    // console.log(filteredData);
    res.json(filteredData);
});

app.get('/company', async (req, res) => {
    const data = await getCompanyFromSheet('1zbF_72YnsjlXTbz1eHY2l8ygyOan86dVlSBdaNKlW5k');
    res.json(data);
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});