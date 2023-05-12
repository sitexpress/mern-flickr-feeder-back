import express from "express"
import axios from "axios";
import cors from "cors";

const index = express()
index.use(cors())
index.use(express.json())


index.get('/', (req, res) => {

    return axios.get(`https://api.flickr.com/services/feeds/photos_public.gne/?key=bdf7039443f9ef9296e976917b374b35&format=json&nojsoncallback=1`)
        .then((response) => {
            res.send(response.data)
            console.log('Express response message!')

        })
        .catch(e => {
            res.send('Express error message!')
            console.log('Error:', e)
        })
})

index.post('/photo', (req, res) => {
    console.log(req.body)
    return axios.get(`
    https://api.flickr.com/services/feeds/photos_public.gne/?key=bdf7039443f9ef9296e976917b374b35&format=json&tags=${req.body.data.params[0]}&tagmode=${req.body.data.params[1]}&nojsoncallback=1`
        )
        .then((response) => {
            res.send(response.data)
            console.log('Express response message!')

        })
        .catch(e => {
            res.send('Express error message!')
            console.log('Error:', e)
        })
})

index.listen(process.env.PORT || 3333, (err) => {
    if(err) {
        return console.log(err)
    }
    console.log('oK')
})




