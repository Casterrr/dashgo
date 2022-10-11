import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import faker from '@withshepherd/faker'

type User = {
    name: string
    email: string
    created_at: string
}

export function makeServer() {
    const server = createServer({

        // Database tables
        models: {
            user: Model.extend<Partial<User>>({})
        },

        // Allows to save/get datas from 2 tables at once.
        serializers: {  
            application: ActiveModelSerializer
        },

        // Random data generation
        factories: {  
            user: Factory.extend({
                name(/*i: number*/) {
                    return faker.name.firstName() +' '+ faker.name.lastName()
                    //return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                created_at() {
                    return faker.date.recent(90) //Last 90 days
                }
            })
        },

        // Including massive datas (200 users)
        seeds(server) {  
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'api' 
            this.timing = 750     // API call delay, for testing
            
            this.post('/users')   // route POST api/users              
            // this.get('/users')  // route GET api/users

            // GET with pagination of 10 in 10
            this.get('/users', function (schema, request) {
                const { page = 1, per_page = 10} = request.queryParams

                const totalUsers = schema.all('user').length //returns 200

                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)
                
                const users = this.serialize(schema.all('user'))
                    .users.slice(pageStart, pageEnd)

                return new Response(
                    200, // status code
                    { 'x-total-count': String(totalUsers) }, //header
                    { users }
                )
            })
            
            this.get('/users/:id')
            
            this.namespace = ''   // if namespace isn't "api",this is not needed.
            this.passthrough()    
        }

    })

    return server
}