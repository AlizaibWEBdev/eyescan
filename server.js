
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;




// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/Whale",(req,res)=>{
    res.render("Whale")
})


app.get("/Buy24H",(req,res)=>{
    res.render("Buy24H")
})

app.get("/Holder",(req,res)=>{
    res.render("Holders")
})




app.get('/api/whale-tracker', async (req, res) => {
    const { chain = 'bsc', min_usd = 1000 } = req.query;

    let url = `https://api.dexcheck.ai/api/v1/blockchain/whale-tracker?chain=${chain}&min_usd=${min_usd}`;
    

    try {
        const response = await axios.get(url, {
            headers: {
                'X-Api-Key': process.env.DEXCHECK_API_KEY
            }
        });

        res.json(response.data || []);
    } catch (error) {
        console.error('Error fetching whale tracker data:', error?.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch data from DexCheck API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
