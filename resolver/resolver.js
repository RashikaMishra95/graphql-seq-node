const PSchema = require('../schema/project.schema');

function insertData(parent,args){
    // let data = new PSchema();
    // data = {
    //     //id:args.id,
    //     title:args.title,
    //     language:args.language,
    //     description:args.description
    // };
    // PSchema.save(data); Writing this way throw an error having data.save is not a function
   /* return new PSchema({
        title:args.title,
        language:args.language,
        description:args.description
    }).save();*/
    return new PSchema(args).save();
}
function delProject(parent,args){
    if(PSchema.destroy({where:{pid:args.pid}})){
        return {msg:`Recorded deleted at ${args.pid}`};
    }
}

function updateData(parent,args) {
    data={"pid":args.pid,
        "title":args.title,
        "language":args.language,
        "description":args.description};
    PSchema.update(data,{where:{pid:args.pid}});
    return data;
}
const resolvers = {
    Query : {
        allProject : ()=>{
            return PSchema.findAll();
        },
        getProjById : (parent,args)=>{
            return PSchema.findAll({where:{pid:args.pid}})
        }
    },
    Mutation :{
        addProject : insertData,
        updProject : updateData,
        delProject : delProject
    }
};

module.exports = resolvers;