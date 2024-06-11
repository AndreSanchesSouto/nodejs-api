import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify({logger: true})

app.listen({
    port: 3030
}, () => console.log("Server is running")
    
)