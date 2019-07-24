const {ApolloServer,gql} = require('apollo-server');
const ProjSchema = require('./schema/project.schema');

const resolvers = require('./resolver/resolver');

const typeDefs = gql`
    type Project {
        pid:Int
        title:String
        language:String
        description:String
    }
    type Query{
        allProject:[Project]
    }
    type Message {
        id: Int
        msg:String
    }
    type Mutation{
        addProject(title:String,
            language:String,
            description:String):Project
        updProject(pid:Int,
            title:String,
            language:String,
            description:String):Project
        delProject(pid:Int):Message
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // enables introspection of the schema
    playground: true, // enables the actual playground
});


/*server.listen(7000,() => {
    console.log(`Server ready at 7000`);
});*/

server.listen({port:process.env.PORT || 7000}).then(({url})=>{
    console.log(`Server ready at port ${url}`);
});
