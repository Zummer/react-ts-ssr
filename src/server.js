import express from 'express'
const app = express()
app.get('/api', (req, res) => {
    res.send({
        message: 'werwesdfsdf am a server route and can also be hot reloaded!'
    })
})
export default app