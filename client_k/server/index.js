const express = require('express');
const cors = require('cors');
const { getDataFromSheet } = require('./google-sheets');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/items/:category/:subcategory', async (req, res) => {
    const category = req.params.category;
    const subcategory = req.params.subcategory;
    let data = await getDataFromSheet('1GI7rgBl2ziVPUR-wtK-7E2-psdIAOywjAf5N2IJANBI');
    data.shift();
    if (category === "all") {
        // const filteredData = data.filter(row => row[2].toLowerCase() === subcategory);
        res.json(data);
    }
    else if (category === "fruits") {
        if (subcategory === "all") {
            const filteredData = data.filter(row => row[7].toLowerCase() === category);
            res.json(filteredData);
        }
        else {
            const filteredData = data.filter(row => row[8].toLowerCase() === subcategory);
            res.json(filteredData);
        }
    }
    else if (category === "vegetable") {
        if (subcategory === "all") {
            const filteredData = data.filter(row => row[7].toLowerCase() === category);
            res.json(filteredData);
        }
        else {
            const filteredData = data.filter(row => row[8].toLowerCase() === subcategory);
            res.json(filteredData);
        }
    }
    else if (category === "shopno") {
        const filteredData = data.filter(row => row[2].toLowerCase() === subcategory.toLowerCase());
        res.json(filteredData);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});