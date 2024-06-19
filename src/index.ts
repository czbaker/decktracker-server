import Fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import dotenv from 'dotenv'

// DotENV -- Local only, make sure this file's contents mirror variables in Railway.
dotenv.config()

// Fastify init
const fastify: FastifyInstance = Fastify({ logger: true })

// Get port (TS sucks)
const envPort = parseInt(process.env.PORT || '')
const port = Number.isInteger(envPort) ? envPort : 3000
const host = process.env.HOST || 'localhost'

// Test Route
fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  return 'Hallo, World'
})

// Init server
fastify.listen({ host, port }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Listening on ${address}`)
})
