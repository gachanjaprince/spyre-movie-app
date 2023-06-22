const express = require('express')
const app = express()
const cors = require('cors')
const {MongoClient, ObjectId } = require('mongodb')
const { response } = require('express')
const { request } = require('http')
const { error } = require('console')
require('dotenv').config()
const PORT = 'https://happy-umbrella-bass.cyclic.app' || 8000

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

MongoClient.connect(dbConnectionStr)
    .then(client=> {
        console.log('Connected to database')
        db = client.db(dbName)
        collection = db.collection('movies')
    })

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/static", express.static('./static/'));
app.use(cors())

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.get('/search', async (req, res)=> {
    try {
        let result = await collection.aggregate([
            {
                "$search": {
                    "autocomplete": {
                        "query": `${req.query.query}`,
                        "path": "title",
                        "fuzzy": {
                            "maxEdits": 2,
                            "prefixLength": 4
                        }
                    }
                }
            }
        ]).limit(10).toArray()
        res.send(result)
    } catch(error) {
        res.status(500).send({message: error.message})
    }
})


app.get("/get/:id", async (request, response) => {
    try {
        let result = await collection.findOne({
            "_id": new ObjectId(request.params.id)
        })
        response.send(result)
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})


app.listen(PORT, ()=> {
    console.log('Server is running!')
})