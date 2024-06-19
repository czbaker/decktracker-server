import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// DotENV
dotenv.config()

// Express init
const app: Express = express()
const port = process.env.PORT || 3000

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Express+TS Server!')
})

// Init Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
